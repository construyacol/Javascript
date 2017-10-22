
 var moment = require('moment');
 // var request = require('superagent');
// require('../upload');	

module.exports = function (pictures){

	  	var agregaloVe = '';
	  	let i = 1;

	  	pictures.map(function(pic){
	  		agregaloVe = agregaloVe+
	  		'<div class="card">'+
		  		'<div id="nombre">'+pic.user.username+'</div>'+
		  		'<div class="card-image">'+
					'<img class="activator" src='+pic.url+'>'+
			    '</div>'+
				    '<div class="card-content">'+
				      '<a href="'+pic.user.username+'" class="card-title ">'+
				        '<img src="'+pic.user.avatar+'" class="avatar">'+
				        '<span class="username">'+pic.user.username+'</span>'+
				      '</a>'+
				      '<small class="right time">'+moment(pic.createdAt).fromNow()+'</small>'+
				      '<div class="contecora" id="cora'+i+'">'+
				        '<a class="left cora" id="like'+i+'" onclick="like('+i+','+pic.likes+');"><i class="fa fa-heart-o" aria-hidden="true"></i></a>'+
				        '<a class="left cora" id="dislike'+i+'" onclick=dislike('+i+','+pic.likes+');><i class="fa fa-heart" aria-hidden="true"></i></a>'+
				        '<span class="left likes">'+pic.likes+' me gusta</span>'+
				      '</div>'+
				    '</div>'+
			  '</div>';
		    i++;
	  	});


	  	function onsubmit(ev){
	  		
	  		// for (let i = 1 ; i < 2; i++) {
	  			ev.preventDefault();

			var data = new FormData(this);
			request
				.post('/api/pictures')
				.send(data)
				.end(function(err, res){
					console.log(err, res);
				})
				return false;
	  		// }
		}

		return $('#card-aqui').append(agregaloVe);
	  }


// return layout(el);

			//  <div class="card" id="card">
			// <div id="nombre">ssas</div>
			//     <div class="card-image">
			//       <img class="activator">
			//     </div>
			//     <div class="card-content">
			//       <a href="/user/${picture.user.username}" class="card-title ">
			//         <img src="${picture.user.avatar}" class="avatar">
			//         <span class="username">${picture.user.username}</span>
			//       </a>
			//       <small class="right time">${moment(picture.createdAt).fromNow()}</small>
			//       <div class="contecora">
			//         <a class="left" id="like" href="#" onclick=${like}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
			//         <a class="left" id="dislike" href="#" onclick=${dislike}><i class="fa fa-heart" aria-hidden="true"></i></a>
			//         <span class="left likes">${picture.likes} me gusta</span>
			//       </div>
			//     </div>
			//   </div>

	  		// $('#card-aqui').append($("<div>").load("./home.html #cards", function(){
	  		// 	$('.activator').attr('src','http://materializecss.com/images/office.jpg');
	  		// 	$('.card-title').attr('href', '/user/' + pic.user.username);
	  		// 	$('.username').hml(pic.user.username);
    	// 		// template(pictures);
    	// 	}));

 

