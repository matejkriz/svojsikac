import childProcess from 'child_process';
import gulp from 'gulp';

gulp.task('build', (done) => {
  childProcess
    .spawn('yarn', ['run', 'build'], { stdio: 'inherit' })
    .on('close', done);
});
