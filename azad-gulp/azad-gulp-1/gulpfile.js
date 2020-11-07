const   gulp = require( 'gulp' ),
        rename = require( 'gulp-rename' ),
        minifyCSS = require('gulp-minify-css'),
        sass = require('gulp-sass'),
        concat = require('gulp-concat'),
        sourcemaps = require('gulp-sourcemaps'),
        browserSync = require('browser-sync').create(),
        uglify = require('gulp-uglify');

const   styleSrc = './src/sass/**/*.scss',
        styleDist = './assets/css/',
        scriptSrc = './src/script/**/*.js',
        scriptDist = './assets/js/';

gulp.task('sass',()=>{
    return gulp.src( styleSrc )
        .pipe(sourcemaps.init())
        // This will output the non-minified version
        // .pipe(sass({
        //     'outputStyle':'expanded'
        // }).on('error',sass.logError))
        // .pipe( gulp.dest( styleDist ) )
        // This will minify the file
        // .pipe( minifyCSS() )
        .pipe(sass({
            'outputStyle':'compressed'
        }).on('error',sass.logError))
        // .pipe(concat('main-style.css'))
        // This will rename the file
        .pipe( rename({suffix:'.min'}) )
        .pipe(sourcemaps.write('./'))
        // This will output the minified version
        .pipe( gulp.dest( styleDist ) )
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('js',()=>{
    //sconsole.log('Are you looking for something');
    return gulp.src(scriptSrc)
        .pipe(sourcemaps.init())
        // .pipe(concat('activation.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(scriptDist))
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('serve',()=>{
    browserSync.init({
        server:'./'
        // server:{
        //     baseDir:'./'
        // }
    });    
    gulp.watch(styleSrc, gulp.series('sass'));
    gulp.watch(scriptSrc, gulp.series('js'));
    gulp.watch(['./*.html']).on('change',browserSync.reload);
});

gulp.task('watch', gulp.parallel('serve','sass','js'));