import childProcess from 'child_process';
import gulp from 'gulp';

gulp.task('server', (done) => {
  childProcess
    .spawn('yarn', ['run', 'build'], { stdio: 'inherit' })
    .on('close', done);
});
