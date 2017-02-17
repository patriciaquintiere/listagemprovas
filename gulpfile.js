var gulp = require('gulp');
// Live-reloading with Browser Sync
var browserSync = require('browser-sync').create();
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// minify images
var imagemin = require('gulp-imagemin');
// require useref
var useref = require('gulp-useref');
// minify
var uglify = require('gulp-uglify');
// gulp-if
var gulpIf = require('gulp-if');
// minify Css files
var minifyCss = require('gulp-cssmin');
// "deploy" gh-pages in github
var deploy = require('gulp-gh-pages');


gulp.task('browserSync',function(){
    browserSync.init({
        server:{
            baseDir: ["./","./src"],
            index: "src/index.html"
        }
    });
});

// copy files data
gulp.task('copy-data-json',function(){
    return gulp.src('src/app/data/*.json')
        .pipe(gulp.dest('dist/app/data/'));
});

// copy files data
gulp.task('copy-templates',function(){
    return gulp.src('src/app/template/*')
        .pipe(gulp.dest('dist/app/template/'));
});

// Converts Sass to CSS with gulp-sass
gulp.task('sass', function(){
    return gulp.src('src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.reload({stream: true}))
});

// concat files and minify
gulp.task('useref', function(){
    return gulp.src('src/index.html')
    .pipe(useref({searchPath: ['dist', 'src', './']}))
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
});

gulp.task('minImage', () =>
    gulp.src('src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
);


// Gulp watch syntax
////browserSync
////sass
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/assets/scss/imports/*.scss',['sass']);
    gulp.watch('src/assets/scss/*.scss',['sass']);
});

// Minify Task
gulp.task('build', ['useref','minImage','copy-templates','copy-data-json'], function(){
    //gulp.src(['src/*.png','src/*.ico',]).pipe(gulp.dest('dist'));
});

// Deploy to Git Pages
gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
    .pipe(deploy());
});
