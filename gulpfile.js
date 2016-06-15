var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var del = require('del');
// var stream = require('wiredep').stream();

var $ = gulpLoadPlugins();
var reload = browserSync.reload;


gulp.task('serve', function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    './*.html',
    './*.js'
  ]).on('change', reload);

  // gulp.watch('app/styles/**/*.scss', ['styles']);
  // gulp.watch('app/scripts/**/*.js', ['scripts']);
  // gulp.watch('app/fonts/**/*', ['fonts']);
  // gulp.watch('bower.json', ['wiredep', 'fonts']);
});
