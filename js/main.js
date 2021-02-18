//pega o ID formulario sendo "chamado" pelo botão com a classe Submit
document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);


//função de cadastro
function cadastrarVeiculo(e){
	var modeloVeiculo = document.getElementById('modeloVeiculo').value;
	var placaVeiculo = document.getElementById('placaVeiculo').value;
	var time = new date();
	
	carro = {
		modelo: modeloVeiculo,
		placa: placaVeiculo,
		hora: time.getHours(),
		minutos: time.getMinutes(),
		dia: time.getDay();
	}
	console.log(carro);
	e.preventDefault();
}