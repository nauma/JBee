var gulp       = require('gulp');
var webserver  = require('gulp-webserver');
var watch      = require('gulp-watch');
var babel      = require('gulp-babel');
var concat     = require('gulp-concat');

gulp.task('watch', function() {
  watch('src/**/*.js', function () {
    gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(concat('jb.js'))
      .pipe(gulp.dest('build'));
  });
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('default', ['watch', 'webserver']);