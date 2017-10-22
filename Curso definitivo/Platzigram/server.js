
var express = require('express');
var app = express();
var multer  = require('multer');
var ext = require('file-extension');
// var formidable = require('express-formidable');

// app.use(formidable.parse({ keepExtensions: true, uploadDir:"uploads" }));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'.'+ext(file.originalname))
  }
});
 
var upload = multer({ storage: storage }).single('picture');

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get(['/', '/signup','/signin','/feed','/:username'], function(req, res){
	res.render('index', {title:'Platzigram'})
})

app.get('/api/pictures', function(req, res){
	var pictures = [
	{
		user:{
		   username: 'Cristian',
		   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nexy_dre/128.jpg'
		},
		url: 'http://materializecss.com/images/office.jpg',
		likes: 19,
		liked: true,
		createdAt: new Date()
	},
	{
		user:{
		   username: 'Andresaraveug',
		   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nexy_dre/128.jpg'
		},
		url: 'http://materializecss.com/images/office.jpg',
		likes: 20,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() - 10)
	},
	{
		user:{
		   username: 'Camilo',
		   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nexy_dre/128.jpg'
		},
		url: 'http://materializecss.com/images/office.jpg',
		likes: 21,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() - 10)
	},
	
	];

	setTimeout(()=>res.send(pictures),2000)
		
	
});

app.get('/api/user/:username', function(req, res){
	var user = {
		username:'Cristian',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nexy_dre/128.jpg',
		pictures: [
		  {
			id: 1,
			src: 'https://www.yeeply.com/blog/wp-content/uploads/2015/12/programador-android-e1450190639706.jpg',
			likes: 3		  	
		  },
		  {
			id: 2,
			src: 'http://itcampeche.edu.mx/wp-content/uploads/2016/09/dia-del-programador.jpg',
			likes: 4		  	
		  },
		  {
			id: 3,
			src: 'http://noticias.universia.edu.pe/net/images/cultura/d/di/dia/dia-del-programador.jpg',
			likes: 1		  	
		  },
		]
	}

	res.send(user);
});	


//esta función es del middleware de multer para hacer el upload 
app.post('/api/pictures',function(){
	//aqui definimos el parametro del input file "name" que subiremos al servidor
	upload(req, res, function(err){
		if (err) {
			return res.send(500, "Erro al subir archivo :(");
		}
	  res.send('Archivo subido con exito :)');
	})
})

app.listen(8000, function(err){
	if(err) return console.log("Hubo un error"), process.exit(1);

	console.log('Platzigram ejecutandose en el puerto 8000')
})