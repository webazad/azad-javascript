var gulp = require( 'gulp' ),
    rename = require( 'gulp-rename' ),
    sass = require( 'gulp-sass' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    browserify = require( 'browserify' ),
    babelify = require( 'babelify' ),
    source = require( 'vinyl-source-stream' ),
    buffer = require( 'vinyl-buffer' ),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify');

var styleSRC = './src/scss/style.css',
    styleDIST = './assets/css/';

var jsES6 = 'script.js',
    jsFolder = 'src/js/',
    jsSRC = 'src/js//transfer/*.js',
    jsASSETS = './assets/js/';
    jsDIST = './dist/js/';
    jsFILES = [jsES6];

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
        .pipe( gulp.dest( jsASSETS ) )
        .pipe( uglify() )
        .pipe( rename({suffix:'.min'}) )
        .pipe( gulp.dest( jsASSETS ) )
        .pipe(browserSync.stream());
});

gulp.task('es6',function(){
    jsFILES.map(function( entry ){
        return browserify({
            entries:[ jsFolder + entry ]
        })
            .transform( babelify, { presets:['env'] })
            .bundle()
            .pipe( source( entry ) )
            .pipe( gulp.dest( jsDIST ) )
            .pipe( gulp.dest( 'src/js/transfer/' ) )
            .pipe( rename( { extname:'.min.js'} ) )
            .pipe( buffer() )
            .pipe( sourcemaps.init( { loadMaps:true } ) )
            .pipe( uglify() )
            .pipe( sourcemaps.write( './' ) )
            .pipe( gulp.dest( jsDIST ) );
    });
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