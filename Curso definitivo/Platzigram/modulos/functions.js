
function like(id, like){

	let cora = "#cora"+id;
	let dis = $('#dislike'+id);
	console.log($('#dislike'+id));
		like++;
		$(cora+">span").empty().append(like+" me gusta"); 
		$('#like'+id).css('display','none');
		$('#dislike'+id).css('display','initial');

	// alert("le diste like al "+cora+" tiene tantos "+like);
}
function dislike(id, like){
	like++;
	let cora = "#cora"+id;
	let dis = $('#dislike'+id);
	console.log($('#dislike'+id));
		like--;
		$(cora+">span").empty().append(like+" me gusta"); 
		$('#dislike'+id).css('display','none');
		$('#like'+id).css('display','initial');
	
	// alert("le diste like al "+cora+" tiene tantos "+like);
}

function toggleButtons(){
	// document.getElementByid('fileName').classList.toggle('hide');
	$('#fileName').toggleClass('hide');
	$('#btnUpload').toggleClass('hide');
	$('#btnCancel').toggleClass('hide');
}

function cancelar(){
	toggleButtons();
	$('#formUpload')[0].reset();
	// document.getElementByid('formUpload').reset();
}

function onChange(){
	toggleButtons();
}

