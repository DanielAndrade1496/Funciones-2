segundos=("0"+ String(segundos))
					}
					if(hora <10){
						hora=("0"+ String(hora))
					}
					if(minutos <10){
						minutos=("0"+ String(minutos))
					}
					var horaactual =String(hora)+":"+String(minutos)+":"+(segundos);
					document.getElementById('hora').value=horaactual;
					document.getElementById('total').value=total;
						}		
				</script>
			</div>
			

			<div class="cadro2"> 
				<P class="tituloseccion">Calcular el área de un triángulo: </P>
				<input type="number" id="base" placeholder="Base">
					<input type="number" id="altura" placeholder="Altura">
					<br><br>
					<button onclick="obtenerArea()">Calcular área</button>
					<br><br>
					<label>Área: </label>
					<div id="areaResultado">
					</div>
					<script>
					function obtenerArea(){
					var areaResultado = document.getElementById("areaResultado");
					var b = parseInt(document.getElementById("base").value);
					var h = parseInt(document.getElementById("altura").value);
					var area = (b * h) / 2;

					areaResultado.innerHTML = "" + area;
					}
					</script>
				</div>
				
			<div class="cadro2">
				<P class="tituloseccion">Calcule la raíz cuadrada de un número impar y muestre el resultado con 3 dígitos.:</P>
				<input type="number" id="Num" placeholder="Numero">
				<br><br>
				<button onclick="calcuraiz()">Calcular raíz</button>
				<br><br>
				<label>Raíz: </label>
				<div id="reraiz">
				</div>
				<script>
				function calcuraiz(){
				var reraiz = document.getElementById("reraiz");
				var r = parseInt(document.getElementById("Num").value);
				var raíz = Math.sqrt(r);
				reraiz.innerHTML = "" + raíz.toFixed(3);
				}
				</script>
			</div>
		 </div>
		 
	<div class="cadro1">
		<div class="cadro2"> 
				<P class="tituloseccion">Nombre y versión del navegador:</P>
				<script>
					document.write("Nombre y versión del navegador: " + navigator.userAgent);
				</script>
			</div>

			<div class="cadro2"> 
				<P class="tituloseccion"> Ancho y la altura de la pantalla:</P>
				<p id="pantallab"></p>
				<p id="pantallah"></p>
				<script>
					document.getElementById("pantallab").innerHTML = "Ancho de la pantalla: " + screen.width;
					document.getElementById("pantallah").innerHTML = "Altura de la pantalla: " + screen.height;
				</script>
			</div>
				
			<div class="cadro2">
				<P class="tituloseccion">Ingresar una cadena de texto y mostrar la longitud de la cadena:</P>
				<script>
				var texto = new String("Prueba de texto");
				document.write("Número de letras de la cadena de texto: " + texto.length + "<br>") 
				</script>
			</div>
		 </div>
		 <div class="cadro1">
			<div class="cadro2"> 
				<P class="tituloseccion">Imprimir la página.:</P>
				<input type="button" value="Imprimir" class="printbutton">
				<script>
				document.querySelectorAll('.printbutton').forEach(function(element) {
				element.addEventListener('click', function() {
					print();
						});
					});
				</script>
				</div>
		 </div>
</body>
</html>