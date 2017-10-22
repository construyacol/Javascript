import page from 'page';
import template from './template';
var request = require('superagent');


page('/:username', loadUser, function(ctx, next){
	var content = $('#userPic');
	// main.append(template(ctx.params.username));
	$('#imgUser').attr('src', ctx.user.avatar);
	$('#nameUser').html(ctx.user.username);
	//en este punto ya hicimos peticion con loaduser al server y ya tenemos cargado el objeto en nuestro ctx
	content.append(template(ctx.user));
})

function loadUser(ctx, next){
		$('title').html('Platzigram - :username');
		var main = $('#card-aqui');
	    main.empty().append($("<div>").load("./home.html #perfil",function(){

			request
				.get(`/api/user/${ctx.params.username}`)
				.end(function(err,res){
					if (err) return console.log("error papee");
					ctx.user = res.body;
					// console.log(ctx.user)
					next();
				})
	    }));
}
