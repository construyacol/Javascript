 
var yo = require('yo-yo');
var landing = require('../landing')
var datos = yo`<div class="col s12 m7">
				<div class="row">
				 <div class="signup-form">

					<h1 class="platzigram">Platzigram</h1>
					<form class="signup-form">
						<h2 class="subti">Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
						<div class="section">
							<a class="btn btn-fb hiden-on-small-only">
								<i class="fa fa-facebook-official" aria-hidden="true"></i>
								Iniciar sesión con Facebook
							</a>
						</div>
						<div class="section">
							<input type="email" name="email" placeholder="Correo electrónico">
							<input type="text" name="name" placeholder="Nombre completo">
							<input type="text" name="username" placeholder="Nombre del usuario">
							<input type="password" name="password" placeholder="Contraseña">
							<button class="btn waves-effect waves-light" type="submit">Regístrarme</button>
						</div>
					</form>	

				    </div>		
				</div>

				</div>`;


module.exports = landing(datos);




