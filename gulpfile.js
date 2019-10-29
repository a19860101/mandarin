const {src, dest, series, watch} = require('gulp');
const gulpSass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const gulpBabel = require('gulp-babel');
const autoprefix = require('gulp-autoprefixer');

function css(){
    return src('src/scss/*.scss')
    .pipe(gulpSass())
    .pipe(autoprefix())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
}
function babel(){
    return src('src/js/script.js')
    .pipe(gulpBabel())
    .pipe(dest('dist/js'))
}

exports.default = series(css,babel);