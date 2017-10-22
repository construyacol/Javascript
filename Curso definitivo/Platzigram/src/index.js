
var page = require('page');
//podemos traer el template yo-yo html requiriendolo en forma de modulo

// var main = document.getElementById('main-container')

//podemos enrrutar directamente desde un js requiriendolo de la siguiente forma
require('./homepage');

page('/signup', function(ctx, next){

	var template = require('./signup/template');
	$('title').html('Platzigram - signup');
	var main = $('#main-container');
	main.empty().append(template);
})

require('./signin');
require('./feed');
require('./user-page');

page.start();
