const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

/*------ Server ------*/
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });
    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/*------ Pug compile ------*/
gulp.task('views', function buildHTML() {
    return gulp.src('source/template/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
});