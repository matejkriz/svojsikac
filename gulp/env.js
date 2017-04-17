import args from './support/args';
import gulp from 'gulp';
import { execSync } from 'child_process';

gulp.task('env', () => {
  process.env.NODE_ENV = args.production ? 'production' : 'development';

  process.env.TEST_ENV = 'browser';
  if (args.device) {
    switch (args.device[0].toLowerCase()) {
      case 'a':
        process.env.TEST_ENV = 'android';
        break;
      case 'i':
        process.env.TEST_ENV = 'ios';
        break;
      default:
        process.env.TEST_ENV = 'browser';
    }
  }

  // The app is not a library, so it doesn't make sense to use semver.
  // Este uses appVersion for crash reporting to match bad builds easily.
  const gitIsAvailable = !process.env.SOURCE_VERSION; // Heroku detection.
  if (gitIsAvailable) {
    process.env.appVersion = execSync('git rev-parse HEAD').toString().trim();
  }
});
