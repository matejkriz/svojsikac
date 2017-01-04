import gulp from 'gulp';
import realFavicon from 'gulp-real-favicon';

// Settings were generated online on https://realfavicongenerator.net
// Guide: https://www.npmjs.com/package/gulp-real-favicon
gulp.task('favicon-generate', (done) => {
  realFavicon.generateFavicon({
    design: {
      androidChrome: {
        manifest: {
          declared: true,
          display: 'browser',
          name: 'este',
          onConflict: 'override',
          orientation: 'notSet',
        },
        pictureAspect: 'noChange',
        themeColor: '#ffffff',
      },
      desktopBrowser: {},
      ios: {
        backgroundColor: '#ffffff',
        margin: '28%',
        pictureAspect: 'backgroundAndMargin',
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#5bbad5',
      },
      windows: {
        backgroundColor: '#2d89ef',
        onConflict: 'override',
        pictureAspect: 'noChange',
      },
    },
    dest: './src/common/app/favicons',
    iconsPath: '/assets/favicons',
    markupFile: './gulp/support/favicon/favicon-data.json',
    masterPicture: './src/common/app/favicons/original/favicon.png',
    settings: {
      errorOnImageTooSmall: false,
      scalingAlgorithm: 'Mitchell',
    },
  }, done);
});
