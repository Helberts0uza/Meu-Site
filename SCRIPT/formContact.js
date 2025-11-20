document.getElementById("form-contact").addEventListener("submit", function(event){
    event.preventDefault();

    let valid = true;

    //Vai dar condições ao NOME
    const nome = document.getElementById("nome").value.trim();
    if(nome.length < 2){
        document.getElementById("nomeError").style.display = "block";
        valid = false
    }else{
        document.getElementById("nomeError").style.display ="none";
    }

    //Vai dar condições ao EMAIL
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^([a-zA-Z0-9_\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!emailRegex.test(email)){
        document.getElementById("emailError").style.display ="block";
        valid = false
    }else{
        document.getElementById("emailError").style.display="none";
    }

    //Vai dar condições ao TELEFONE
    const telefone = document.getElementById("telefone").value.trim();
    const phoneRegex = /^[0-9]{9,}$/;
    if(!phoneRegex.test(telefone)){
        document.getElementById("telefoneError").style.display="block";
        valid=false
    }else{
        document.getElementById("telefoneError").style.display="none";
    }

    //Vai verificar se a politica de privacidade vai estar eceite
    const privacidade = document.getElementById("defaultCheck1").checked;
    if(!privacidade){
        document.getElementById("privacidadeError").style.display="block";
        valid=false;
    }else{

        document.getElementById("privacidadeError").style.display="none";
    }

//Se o formulario estiver valido vai dar uma mensagem e voltara pro inicio
if(valid){
    alert("formulario enviado com sucesso")
  document.getElementById("form-contact").reset();
}

});