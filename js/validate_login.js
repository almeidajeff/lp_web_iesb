function Login() {
  var username = $('#username')[0].value;
  username=username.toLowerCase();
  
  var password= $('#password')[0].value;
  password=password.toLowerCase();
  
  if (username=="admin" && password=="admin") {
    window.location="/sucess.html";
  }
  else { 
    alert("Dados incorretos, tente novamente"); 
    }
}