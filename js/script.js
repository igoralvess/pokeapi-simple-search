
function habilitaBtn(){ 
	var texto = document.getElementById("campo").value.replace(" ","");
	var cont = texto.length;

	if(cont >= 3 ){

		document.getElementById("botao").disabled = false;
	} else{
		document.getElementById("botao").disabled = true;
	}

} 