var page = require('page');
var template = require('./template');

page('/', function(ctx, next){

	$('title').html('Platzigram - signin');

	var pictures = [
	{
		user:{
		   username: 'Andresaraveug',
		   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nexy_dre/128.jpg'
		},
		url: 'http://materializecss.com/images/office.jpg',
		likes: 1024,
		liked: true,
		createdAt: new Date()
	},
	{
		user:{
		   username: 'Andresaraveug',
		   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nexy_dre/128.jpg'
		},
		url: 'http://materializecss.com/images/office.jpg',
		likes: 1024,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() - 10)
	},
	
	];
	var main = $('#main-container');
	main.empty().append(template(pictures));
})
	


// var page = require('page');


// page('/', function(ctx, next){
// var main = document.getElementById('main-container')
// 	main.innerHTML = 'Home <a href="/Signup">Signup</a>'; //diga home		

// })
