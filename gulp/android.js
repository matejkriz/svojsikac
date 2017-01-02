import bg from 'gulp-bg';
import gulp from 'gulp';

gulp.task('android', ['native', 'android-simulator'], bg('react-native', 'run-android'));
