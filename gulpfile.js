const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/*------ Server ------*/
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });
    gulp.watch('build/**/*').on('change', browserSync.reload);
});