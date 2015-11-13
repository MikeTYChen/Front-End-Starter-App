var gulp = require('gulp'),
	sass = require('gulp-sass'),
	ejs = require('gulp-ejs'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat');
var path = {
	sass:'app/scss/*.scss',
	sassOutput:'public/stylesheets',
	js:'app/js/*.js',
	jsOutput:'public/js',
	ejs:'app/views/**/*.ejs',
	ejsOutput:'public/views'
}

gulp.task('scripts', function() {
  return gulp.src(path.js)
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.jsOutput));
});

gulp.task('sass',function(){
	gulp.src(path.sass)
		.pipe(sass({
			errLogToConsole:true
		}))
		.pipe(gulp.dest(path.sassOutput));
});

gulp.task('ejs',function(){
	gulp.src(path.ejs)
		.pipe(ejs({msg:"Gulping EJS"}))
        .on('error',gutil.log)
        .pipe(gulp.dest(path.ejsOutput));
});

gulp.task('watch',function(){
	gulp.watch([path.sass],['sass']);
	gulp.watch([path.ejs],['ejs']);
	gulp.watch([path.js],['scripts']);
})

gulp.task('default', ['sass', 'ejs', 'scripts','watch']);