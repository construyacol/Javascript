var request = require('superagent');

function onsubmit(ev){
	ev.preventDefault();

	var data = new FormData(this);
	request
		.post('/api/pictures')
		.send(data)
		.end(function(err, res){
			console.log(arguments);
		})
}