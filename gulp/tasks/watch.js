var gulp = require('gulp'),
watch = require('gulp-watch'),
bs = require('browser-sync').create();

gulp.task('watch' , function() {

  bs.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    bs.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(bs.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  bs.reload();
});
