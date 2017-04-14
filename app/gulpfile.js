var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');


gulp.task('stylus', function() {
  return gulp.src('src/stylus/index.styl')
    .pipe(stylus())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('build', ['stylus']);

gulp.task('watch', ['build'], function () {
  gulp.watch('src/stylus/**/*.styl', ['stylus']);
});

gulp.task('default', ['watch']);
