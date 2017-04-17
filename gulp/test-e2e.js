import args from './support/args';
import childProcess from 'child_process';
import gulp from 'gulp';
import gutil from 'gulp-util';

function log(message) {
  gutil.log(gutil.colors.white.bgGreen(message));
}

function runMochaOnAppium(done) {
  const suite = args.suite || '**';

  log('Starting appium server');
  const appiumP = childProcess.spawn('appium', [
    '--log-level',
    args.production ? 'warn:error' : 'debug',
  ], { stdio: 'inherit' });

  setTimeout(() => {
    log('Appium server should be running now');
    childProcess
      .spawn('mocha',
      [
        `test/e2e/native/${suite}/*.spec.js`,
        '--opts',
        './test/e2e/mocha.opts',
        '--compilers',
        'js:babel-core/register',
      ],
      { stdio: 'inherit' },
    ).on('close', (status) => {
      if (appiumP) {
        log('Finished appium server');
        appiumP.kill();
      }
      done(status);
    });
  }, 10000);
}

function runMochaOnWebdriver(done, serverP) {
  const suite = args.suite || '**';
  let wdP;

  log('Starting webdriver-manager update');
  childProcess.spawn('webdriver-manager', ['update']).on('close', () => {
    log('Finished webdriver-manager update');
    log('Starting webdriver-manager');
    wdP = childProcess.spawn('webdriver-manager', ['start'], { stdio: 'inherit' });
  });

  setTimeout(() =>
    childProcess
    .spawn('mocha',
      [
        `test/e2e/browser/${suite}/*.spec.js`,
        '--opts',
        './test/e2e/mocha.opts',
        '--compilers',
        'js:babel-core/register',
      ],
      { stdio: 'inherit' },
  ).on('close', (status) => {
    if (wdP) {
      log('Finished webdriver-manager');
      wdP.kill();
    }
    if (serverP) {
      log('Finished server');
      serverP.kill();
    }
    done(status);
  })
  , 10000);
}

gulp.task('test-e2e', ['env'], (done) => {
  switch (process.env.TEST_ENV) {
    case 'android':
      log('Starting run-android');
      childProcess.spawn('react-native',
        ['run-android'],
        { stdio: 'inherit' },
      ).on('close', () => {
        log('Finished run-android');
        setTimeout(() => runMochaOnAppium(done), args.production ? 15000 : 60000);
      });
      break;
    case 'browser': {
      log('Starting server');
      const serverP = childProcess.spawn('node',
        ['./src/server'],
        { stdio: 'inherit' },
      );
      setTimeout(() => {
        log('Server should be running now');
        runMochaOnWebdriver(done, serverP);
      }, 15000);
      break;
    }
    case 'ios':
      log('Starting run-ios');
      childProcess.spawn('react-native',
        ['run-ios', '--scheme', args.production ? 'Release' : 'Debug'],
        { stdio: 'inherit' },
      ).on('close', () => {
        log('Finished run-ios');
        setTimeout(() => runMochaOnAppium(done), args.production ? 15000 : 60000);
      });
      break;
    default:
      done();
  }
});
