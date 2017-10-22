 var yo = require('yo-yo');
 var moment = require('moment');

 module.exports =  function pictureCard(pic){ 

  var el;
  
  function render(picture){
    return yo`<div class="card">
    <div class="card-image">
      <img class="activator" src="${picture.url}">
    </div>
    <div class="card-content">
      <a href="/user/${picture.user.username}" class="card-title ">
        <img src="${picture.user.avatar}" class="avatar">
        <span class="username">${picture.user.username}</span>
      </a>
      <small class="right time">${moment(picture.createdAt).fromNow()}</small>
      <div class="contecora">
        <a class="left" id="like" href="#" onclick=${like}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        <a class="left" id="dislike" href="#" onclick=${dislike}><i class="fa fa-heart" aria-hidden="true"></i></a>
        <span class="left likes">${picture.likes} me gusta</span>
      </div>
    </div>
  </div>`
  }

function like (){
  // $("#like").css("display","none");
  document.getElementById("dislike").display = "none";
  alert("a la mielda");
  pic.liked = true;
  pic.likes ++;
  var newEl = render(pic);
  yo.update(el, newEl); 
  return false;

}
function dislike (){
  pic.liked = false;
  pic.likes --;
  var newEl = render(pic);
  yo.update(el, newEl); 
  return false;
}

el = render(pic);
 return el;

  }