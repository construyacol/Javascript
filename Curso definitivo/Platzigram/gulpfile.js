var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var preset =  require('babel-preset-es2015');
var watchify = require('watchify');

//la siguiente tarea se encarga de interpretar el sass, renombrarlo en css y generarlo dentro de la carpeta public
gulp.task('styles', function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('estilos.css'))
		.pipe(gulp.dest('public'));
});

gulp.task('assets', function(){
	gulp
		.src('assets/*')//Generamos una tarea con gulp donde le decimos que coja todo lo que esta dentro de assets y lo coloque dentro de la carpeta public
		.pipe(gulp.dest('public'));
});

gulp.task('modulos', function(){
	gulp
		.src('modulos/*')//Generamos una tarea con gulp donde le decimos que coja todo lo que esta dentro de assets y lo coloque dentro de la carpeta public
		.pipe(gulp.dest('public'));
});
	
function compile(watch){

	var bundle = browserify('./src/index.js');
	
	if (watch) {
		bundle = watchify(bundle); 
		bundle.on('update', function(){
			console.log('--> Bundling...');
			rebundle();
		});
	}

	function rebundle(){
	   bundle
		.transform(babel, {presets: ["es2015"]})
	    .bundle()
	    .on('error', function(err){console.log(err); this.emit('end');})
	    .pipe(source('index.js'))
	    .pipe(rename('app.js'))
	    .pipe(gulp.dest('public'));
	}
	
	rebundle();
}

gulp.task('build', function(){return compile();});

gulp.task('watch', function(){return compile(true);});

gulp.task('default', ['styles','assets', 'build', 'modulos'])