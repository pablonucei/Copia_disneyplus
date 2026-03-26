const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function watch() {
    gulp.watch('./src/styles/*.scss', styles);
}

exports.default = styles;
exports.watch = watch; 