var page = require('page');
var template = require('./template');
var request = require('superagent');
// var axios = require('axios');

function loadPictures(ctx, next){
		$('title').html('Platzigram - signin');
		var main = $('#main-container');
	    main.empty().append($("<div>").load("./home.html #feed",function(){
	    	
	    	console.log(main);
	    	main.append('<div class="loader" id="loader">Cargando...</div>');
	    	next();

	    }));
}

function loadUserAgent(ctx, next){

			request
				.get('/api/pictures')
				.end(function(err,res){
					if (err) return console.log(err);
					ctx.pictures = res.body;
					next();
				})
}




page('/feed',loadPictures,loadUserAgent, function(ctx, next){
    
	var main = $('#main-container');
		
		let loader = $('#loader');
		loader.hide();
    	template(ctx.pictures);
})

// function loadPicturesAxios(ctx, next){

// 		var main = $('#main-container');
// 	    main.empty().append($("<div>").load("./home.html #feed",function(){
	    	
// 			axios
// 				.get('/api/pictures')
// 				.then(function(res){
// 					ctx.pictures = res.data;
// 					next();
// 				})
// 				.catch(function(err){
// 					console.log(err);
// 				})
// 	    }));
// }

//fetch es una funcion o metodo nativo de los navegadores para hacer request http con el servidor
// function loadPicturesFetch(ctx, next){

// 		var main = $('#main-container');
// 	    main.empty().append($("<div>").load("./home.html #feed",function(){
	    	
// 			fetch('/api/pictures')
// 				.then(function(res){
// 					return res.json();
// 				})
// 				.then(function(pictures){
// 					ctx.pictures = pictures;
// 					next();
// 				})
// 				.catch(function(err){
// 					console.log(err);
// 				})
// 	    }));
// }

// function asyncLoad(ctx, next){

// 		var main = $('#main-container');
// 	    main.empty().append($("<div>").load("./home.html #feed",function(){

// 	    	try{
// 	    	 ctx.pictures = await fetch('/api/pictures').then(res => return res.json())
// 	    	 next();
// 	    	}catch (err){
// 	    		return console.log(err);
// 	    	}
// 	    }));
// }




