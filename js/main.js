//pega o ID formulario sendo "chamado" pelo botão com a classe Submit
document.getElementById("formulario").addEventListener("submit", cadastrarVeiculo);


//função de cadastro
function cadastrarVeiculo(e){
	var modeloVeiculo = document.getElementById("modeloVeiculo").value;
	var placaVeiculo = document.getElementById("placaVeiculo").value;
	var time = new Date();
	
	carro = {
		modelo: modeloVeiculo,
		placa: placaVeiculo,
		hora: time.getHours(),
		minutos: time.getMinutes(),
		segundos: time.getSeconds()		
	}
	//if(localStorage.getItem("patio") === null) {
		var carros = [];
		carros.push(carro);
		localStorage.setItem("patio", JSON.stringfy(carros))
	/*} else {
		var carros = JSON.parse(localStorage.getItem("patio"));
		carros.push(carro);
		localStorage.setItem("patio"), JSON.stringify(carros);
	}*/
	e.preventDefault();
}

function mostrapatio(){
	var carros = JSON.parse(localStorage.getItem("patio"));
	var carrosResultado = document.getElementId("resultados");
	
	for(var i = 0; i < carros.lenght; i++) {
		var modelo = carros[i].modelo;
		var placa = carros[i].placa;
		var hora = carros[i].hora + ":" + carros[i].minutos + ":" + carros[i].segundos;
		
		carrosResultado.innerHTML += "<tr><td>" + modelo + "</td>" +
										"<td>" + placa + "</td>" +
										"<td>" + hora;		
	}
}