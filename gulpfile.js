var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var minifyJS = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var input = {
    styles: 'src/sass/**/*.sass',
    js: 'src/js/**/*.js',
    libs: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/bootstrap/dist/css/bootstrap.min.css']
};
var output = {
    styles: 'build/css',
    js: 'build',
    libs: 'build/lib'
};

gulp.task('css', function(){
    return gulp.src(input.styles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.styles))
});

gulp.task('js', function(){
    return gulp.src(input.js)
        .pipe(sourcemaps.init())
        .pipe(minifyJS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.js));
});

gulp.task('copy-libs', function(){
    return gulp.src(input.libs)
        .pipe(gulp.dest(output.libs))
});

gulp.task('watch', function(){
    gulp.watch(input.styles, ['css']);
    gulp.watch(input.js, ['js']);
});

gulp.task('default', ['watch']);
          