 
var yo = require('yo-yo');
var landing = require('../landing/');
var datos = yo`<div class="col s12 m7">
				<div class="row">
				 <div class="signup-form">

					<h1 class="platzigram">Platzigram</h1>
					<form class="signup-form">
						<div class="section">
							<a class="btn btn-fb hiden-on-small-only">
								<i class="fa fa-facebook-official" aria-hidden="true"></i>
								Iniciar sesión con Facebook
							</a>
						</div>
						<div class="section">
							<input type="text" name="username" placeholder="Nombre del usuario">
							<input type="password" name="password" placeholder="Contraseña">
							<button class="btn waves-effect waves-light" type="submit">Entrar</button>
						</div>
					</form>	

				    </div>		
				</div>

				</div>`;


module.exports = landing(datos);




