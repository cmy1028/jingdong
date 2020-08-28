const gulp =require('gulp')
const connect = require('gulp-connect')

gulp.task('html',done=>{
    gulp.src('*.html')
    .pipe(gulp.dest,('dist'))
    done()
})
