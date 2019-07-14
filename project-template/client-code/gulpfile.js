var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-public-folder', function () {
    return gulp.src('public/*', { read: false })
        .pipe(clean());
});

gulp.task('publish-for-web', gulp.series('clean-public-folder', function () {
    return gulp.src(['assets', 'assets/**/*', 'scripts', 'scripts/**/*', 'styles', 'styles/**/*', 'index.html'], {base: '.'})
        .pipe(gulp.dest('public'));
}));