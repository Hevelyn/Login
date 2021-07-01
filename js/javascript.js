function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value != "" && senha.value != ""){
        alert('Seu login está correto!')
    }else if (email.value == "" && senha.value == "" ) {
        alert('Dados incorretos!')
    } 
    var json = {
        dado1:email,
        dado2:senha
    }
    api.post("/user")

}