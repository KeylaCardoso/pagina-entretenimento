
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("Você digitou um endereço de e-mail inválido!")
    return (false)
}

function valida(){
	var nome = document.getElementById('nome');
	var envio = document.getElementById('envio');
	if (nome.value === "" || envio.value === ""){
		alert("Por favor, verifique se você preencheu seu nome e inseriu sua mensagem");
	}

	else{
		alert("Seu formulário foi enviado com sucesso!");
	}
}