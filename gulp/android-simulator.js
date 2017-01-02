import { execSync, spawn } from 'child_process';
import gulp from 'gulp';

gulp.task('android-simulator', () => {
  const adbDevices = execSync('adb -e devices').toString();
  const device = adbDevices.split('\n')[1];
  if (!device || !device.length) { // if there is no simulator running
    const avds = execSync('emulator -list-avds').toString();
    const avdName = avds.split('\n')[0];
    spawn('emulator', ['-avd', avdName], { detached: true });
  }
});
