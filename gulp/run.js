import args from './support/args';
import childProcess from 'child_process';
import gulp from 'gulp';

gulp.task('run', ['env'], done => {
  const task = args.production ? 'start' : 'dev';

  childProcess
    .spawn('yarn', ['run', task], { stdio: 'inherit' })
    .on('close', done);
});
