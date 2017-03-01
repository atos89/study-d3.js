'use strict';

const gulp = require('gulp');
const del = require('del');
const config = require('../config');

gulp.task('clean', () => {
    return del([
        config.paths.dst.js,
        config.paths.dst.css
    ]);
});
