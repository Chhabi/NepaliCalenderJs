var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('css', function() {
    gulp.src('css/less/*.less')
        .pipe(less())
        .pipe(autoprefixer('last 15 version'))
        .pipe(gulp.dest('css'));
});


gulp.task('watch', function() {
    gulp.watch('css/less/*.less', ['css']);
    //gulp.watch('jade/*.jade', ['html']);
});

gulp.task('default', ['watch']);