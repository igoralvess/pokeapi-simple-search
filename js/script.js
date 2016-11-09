
document.getElementById("botao").disabled = true;
document.getElementById("inputNome").value = "   Nome";
document.getElementById("jDados").style.display = 'none';
document.getElementById("inputNome").addEventListener("keyup", function() {habilitaBtn()});
document.getElementById("botao").addEventListener("click", function() {callApi()});
document.getElementById("pesqNovamente").addEventListener("click", function() {pesqNovamente()});
document.getElementById("inputNome").addEventListener("click", function() {limpaTexto()});


function habilitaBtn(){

	var inputNome = document.getElementById("inputNome").value;

	while(inputNome.indexOf(" ") != -1){
 		inputNome = inputNome.replace(" ", "");
 	}
 	var cont = inputNome.length;

	if(cont >= 3 ){

		document.getElementById("botao").disabled = false;
	} else{
		document.getElementById("botao").disabled = true;
	}
}

function callApi(){
	var nome = document.getElementById("inputNome").value;
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://www.pokeapi.co/api/v2/pokemon/" + nome, true);
	xhr.send(null);
	xhr.onreadystatechange = function () 
	{
		
	    if (xhr.readyState === 4 && xhr.status == 200)
	    {

	    	var dados = JSON.parse(xhr.responseText);
	    	resultado(dados);
	    	//alert(dados.forms[0].name);
	    }
	    else if (xhr.status != 200){

	    	alert("O pokemón informado não existe!");
	    }
	}
}

function resultado(dados){

	var div = document.getElementById("jDados");
	var nome = dados.forms[0].name;
	var numero = dados.id;
	var quantTipos = dados.types.length;
	var ul = document.getElementById("tipos");

	for (var i = 0; i < quantTipos; i++) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(dados.types[i].type.name));
		ul.appendChild(li);
	}

	document.getElementById("p1").innerHTML = "Nome: " + nome;
	document.getElementById("p2").innerHTML = "Numero: " + numero;

	div.style.display = 'block';

}

function pesqNovamente(){

	document.getElementById("tipos").innerHTML = '';
	document.getElementById("jDados").style.display = 'none';
}
function limpaTexto(){

	document.getElementById("inputNome").value = "";
}

