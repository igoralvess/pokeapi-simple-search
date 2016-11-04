
document.getElementById("botao").disabled = true;
document.getElementById("jDados").style.display = 'none';
document.getElementById("campo").addEventListener("keyup", function() {habilitaBtn()});
document.getElementById("botao").addEventListener("click", function() {callApi()});


function habilitaBtn(){

	var campo = document.getElementById("campo").value;

	while(campo.indexOf(" ") != -1){
 		campo = campo.replace(" ", "");
 	}
 	var cont = campo.length;

	if(cont >= 3 ){

		document.getElementById("botao").disabled = false;
	} else{
		document.getElementById("botao").disabled = true;
	}
}

function callApi(){
	var nome = document.getElementById("campo").value;
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://www.pokeapi.co/api/v2/pokemon/" + nome, true);
	xhr.send(null);
	xhr.onreadystatechange = function () 
	{
		
	    if (xhr.readyState === 4 && xhr.status == 200)
	    {

	    	dados = JSON.parse(xhr.responseText);
	    	document.getElementById("jDados").style.display = 'block';
	    	//alert(dados.forms[0].name);
	    }
	}
}