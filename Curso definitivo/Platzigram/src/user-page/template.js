
 // var moment = require('moment');
 // var request = require('superagent');
// require('../upload');	

export default function userPageTemplate(user){

	  	var agregaloVe = '';

	  	user.pictures.map(function(picture){
	  		agregaloVe = agregaloVe+
	  		  `<div class="col s12 m6 l4">
	  		  	 <div class="picture-container contenedor">
	  		  		 <img src="${picture.src}" class="picture"/>
	  		  		 <div class="likes2 center-align"><i class="fa fa-heart"></i> ${picture.likes}</div>
	  		  	 </div>
	  		   </div>`;
	  	});
		 return $('#userPic').append((agregaloVe));
}



