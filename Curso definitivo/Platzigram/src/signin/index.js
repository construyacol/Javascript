var page = require('page');
// var template = require('./template');

page('/signin', function(ctx, next){

	$('title').html('Platzigram - signin');
	var main = $('#main-container');

    main.append($("<div>").load("./signin.html #contenedor"));
	// main.empty().append(template);
})

// carga asincronica con callback


// $("#menu1").append($("<div>").load("../menu.html #menUsuario",function(){
//                 $.getScript("assets/js/classie.js");
//                 $.getScript("assets/js/gnmenu.js");
//                 $.getScript("assets/js/function.js");


//     //al iniciar este modulo procedemos a validar que tipo de contenido se debe mostrar dependiendo si se envía previamente desde el session storage, si esta iniciando session por defecto se mostraran el modulo de oportunidades
//                   var modulo = localStorage.getItem("Modulo");
//                   if (modulo=="Mi cuenta") {
//                            miCuentaclick();
//                   } else if (modulo=="oportunidades") {
//                            oportunidadesClick();
//                   }else if (modulo=="mis inversiones") {
//                            misInversionesClick();
//                   }else{
//                    oportunidadesClick();
//                   }


//                     }));