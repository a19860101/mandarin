const {src, dest, series, watch} = require('gulp');
const gulpSass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

function css(){
    return src('src/scss/*.scss')
    .pipe(gulpSass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
}

exports.default = series(css);