var gulp = require('gulp'),
	sass = require('gulp-sass'),
	ejs = require('gulp-ejs'),
	gutil = require('gulp-util');
var path = {
	sass:'app/scss/**/*.scss',
	sassOutput:'public/stylesheets',
	ejs:'app/views/**/*.ejs',
	ejsOutput:'public/views'
}

gulp.task('sass',function(){
	gulp.src(path.sass)
		.pipe(sass({
			errLogToConsole:true
		}))
		.pipe(gulp.dest(path.sassOutput));
})

gulp.task('ejs',function(){
	gulp.src(path.ejs)
		.pipe(ejs({msg:"Gulping EJS"}))
        .on('error',gutil.log)
        .pipe(gulp.dest(path.ejsOutput));
})

gulp.task('watch',function(){
	gulp.watch([path.sass],['sass']);
	gulp.watch([path.ejs],['ejs']);
})

gulp.task('default', ['sass', 'ejs','watch']);