var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var preset =  require('babel-preset-es2015');

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

gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
});


gulp.task('default', ['styles','assets', 'scripts'])