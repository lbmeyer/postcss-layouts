var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'),
pxtorem = require('postcss-pxtorem'),
extend = require('postcss-extend'),
animation = require('postcss-animation'),
colorFn = require('postcss-color-function');


gulp.task('styles', function() {
  var plugins = [
    cssImport,
    mixins,
    cssvars,
    nested,
    hexrgba,
    pxtorem,
    animation,
    colorFn,
    autoprefixer
  ];

  return gulp.src(['./app/assets/styles/*.css', './app/assets/modules/**/*.scss'])
    // .pipe(sass())
    .pipe(postcss(plugins))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
