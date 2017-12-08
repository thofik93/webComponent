var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('scripts', function(){
  return gulp.src(['./js/jquery.min.js', 
                   './modules/qdh.js', 
                   './modules/button/button.js',
                   './modules/button/buttonDropdown.js',
                   './modules/map/map.js'])
      .pipe(concat('web-component.js'))
      .pipe(gulp.dest('./dist/'));
});