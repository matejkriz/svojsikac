import { execSync, spawn } from 'child_process';
import gulp from 'gulp';

const isRunning = () => {
  const adbDevices = execSync('adb -e devices').toString();
  const device = adbDevices.split('\n')[1];
  return device && device.length;
};

gulp.task('android-simulator', () => {
  if (!isRunning()) { // if there is no simulator running
    const avds = execSync('emulator -list-avds').toString();
    const avdName = avds.split('\n')[0];
    spawn('emulator', ['-avd', avdName], { detached: true });
    while (!isRunning()) {
      setTimeout(() => {}, 1000);
    }
  }
});
