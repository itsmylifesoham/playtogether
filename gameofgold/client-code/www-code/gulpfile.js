var gulp = require('gulp');
var clean = require('gulp-clean');
var del = require('del');

gulp.task('clean-www-folder', function () {
    return gulp.src('../www/*', { read: false })
        .pipe(clean({force: true}));
});

gulp.task('remove-jsmap-files-from-bundled-scripts', function () {
    return del('scripts/**/*.map', {force:true});
});

gulp.task('publish-for-web', gulp.series('clean-www-folder', function () {
    return gulp.src(['assets', 'assets/**/*', 'scripts', 'scripts/**/*', 'styles', 'styles/**/*', 'res', 'res/**/*', 'index.html'], {base: '.'})
        .pipe(gulp.dest('../www'));
}));