var gulp = require('gulp'),
	sass = require('gulp-sass'),
	ejs = require('gulp-ejs'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

var path = {
	sass:'app/scss/*.scss',
	sassOutput:'public/styles',
	js:'app/js/*.js',
	jsOutput:'public/js',
	ejs:'app/views/*.ejs',
	ejsOutput:'public/views'
}

//compile our scripts
gulp.task('scripts', function() {
  return gulp.src(path.js)
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.jsOutput));
});

// Compile Our Sass to CSS
gulp.task('sass',function(){
	gulp.src(path.sass)
		.pipe(sass({
			errLogToConsole:true
		}))
		.pipe(gulp.dest(path.sassOutput));
});

// Compile Our EJS
gulp.task('ejs',function(){
	gulp.src(path.ejs)
		.pipe(ejs({msg:"Gulping EJS"}))
        .on('error',gutil.log)
        .pipe(gulp.dest(path.ejsOutput));
});

//BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init(["../css/*.css", "../js/*.js"],{
        server: {
            baseDir: "./public",            
            index: "views/index.html"
        }
    });
});

//Watch Tasks
gulp.task('watch',function(){
	gulp.watch([path.sass],['sass',reload]);
	gulp.watch([path.ejs],['ejs',reload]);
	gulp.watch([path.js],['scripts',reload]);
})

gulp.task('default', ['sass', 'ejs', 'scripts','watch','browser-sync']);