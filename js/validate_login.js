function Login() {
  var username = $('#username')[0].value;
  username=username.toLowerCase();
  
  var password= $('#password')[0].value;
  password=password.toLowerCase();
  
  // Verifica se os usuário e senha estão corretos
  // Obtendo sucesso o usuário é enviado para a página de sucesso
  if (username=="admin" && password=="admin") {
    window.location="sucess.html";
  }

  // Caso contrário um alerta é apresentado
  else { 
    alert("Dados incorretos, tente novamente!"); 
    }
}