var gulp = require( 'gulp' ),
    rename = require( 'gulp-rename' ),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify');

var styleSRC = './src/scss/style.css',
    styleDIST = './dist/css/';

var jsSRC = './src/js/script.js',
    jsDIST = './dist/js/';

gulp.task('style',function(){
    gulp.src( styleSRC )
        // This will output the non-minified version
        .pipe( gulp.dest( styleDIST ) )
        // This will minify the file
        .pipe( minifyCSS() )
        // This will rename the file
        .pipe( rename({suffix:'.min'}) )
        // This will output the minified version
        .pipe( gulp.dest( styleDIST ) )
        .pipe(browserSync.stream());
});

gulp.task('js',function(){
    gulp.src( jsSRC )
        .pipe( gulp.dest( jsDIST ) )
        .pipe( uglify() )
        .pipe( rename({suffix:'.min'}) )
        .pipe( gulp.dest( jsDIST ) )
        .pipe(browserSync.stream());
});

gulp.task('serve',['style','js'],function(){
    browserSync.init({
        server:'./'
    });
    gulp.watch(styleSRC,['style']);
    gulp.watch(jsSRC,['js']);
    gulp.watch('./*.html').on('change',browserSync.reload);
});

gulp.task('default',['serve']);