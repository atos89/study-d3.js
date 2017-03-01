'use strict';

const config = require('../config');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const ignore = require('gulp-ignore');
const stylus = require('gulp-stylus');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');

gulp.task('build', ['build:js', 'build:stylus']);

gulp.task('build:js', () => {
    return gulp.src([
        config.paths.src.libs + '/d3.js-4.7.0/d3.min.js',
        config.paths.src.js + '/*.js'
    ])
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(concat('study-d3.js.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dst.js));
});

gulp.task('build:stylus', () => {
    return gulp.src(config.paths.src.stylus + '/main.styl')
    .pipe(ignore.exclude([
        '/**/_*.styl'
    ]))
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(stylus())
    .pipe(csso())
    .pipe(rename({
        basename: 'study-d3.js',
        extname: '.css'
    }))
    .pipe(gulp.dest(config.paths.dst.css));
});
