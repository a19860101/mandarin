const {src, dest, series, watch} = require('gulp');
const gulpSass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const gulpBabel = require('gulp-babel');
// const autoprefix = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(){
    var plugins = [
        autoprefixer({browsers: ['last 2 version']}),
    ];
    return src('src/scss/*.scss')
    // .pipe(autoprefix())
    .pipe(gulpSass())
    .pipe(minifyCSS())
    .pipe(postcss(plugins))
    .pipe(dest('dist/css'))
}
function babel(){
    return src('src/js/script.js')
    .pipe(gulpBabel())
    .pipe(dest('dist/js'))
}

exports.default = series(css,babel);