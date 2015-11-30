var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src(['./client/**/*.js', '!./client/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
