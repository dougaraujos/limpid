'use strict';

var gulp = require('gulp'),

	bourbon = require('node-bourbon').includePaths,

	sass = require('gulp-sass'),
	sassSrc = 'src/**/*.scss',
	cssDist = 'dist';

gulp

.task('watch',  function(){
	gulp.watch(sassSrc, ['sass']);
})

.task('sass', function(){
	gulp.src(sassSrc)
	.pipe(sass({
		outputStyle: 'compressed',
		includePaths: bourbon
	}).on('error', sass.logError))
	.pipe(gulp.dest(cssDist));
})

.task('default',[
	'sass',
	'watch'
]);
