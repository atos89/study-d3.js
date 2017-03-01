'use strict'

const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync');

gulp.task('watch', () => {
    gulp.start(
        'watch:js',
        'watch:stylus',
        'watch:dist'
    );
});

gulp.task('watch:js', () => {
    gulp.watch(config.paths.src.js + '/**/*', ['build:js']);
});

gulp.task('watch:stylus', () => {
    gulp.watch(config.paths.src.stylus + '/**/*', ['build:stylus']);
});

gulp.task('watch:dist', () => {
    gulp.watch(config.paths.dst.root + '/*.php', ['reload']);
    gulp.watch(config.paths.dst.root + '/assets/**/*', ['reload']);
});

gulp.task('reload', () => {
    browserSync.reload();
});
