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

	xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/charmander", true);
	xhr.send(null);
	xhr.onreadystatechange = function () 
	{
		
	    if (xhr.readyState === 4)
	    {

	    	var dadosJSON = xhr.responseText;
	    	alert("teste");
	    }
	}
}