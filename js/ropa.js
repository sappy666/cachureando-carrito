// Validación de Formulario de calzado, chaquetas, tops, pantalones

function validateForm() {
    var verify=true;
    var expRegName = /^([a-z ñáéíóú]{2,60})$/i;  
    var expRegEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
    var expRegAdress = /^[a-zA-Z0-9]*$/;
    var expRegComune = /^([a-z ñáéíóú]{2,60})$/i;  
    var expRegRegion = /^([a-z ñáéíóú]{2,60})$/i; 
    var expRegceiver =  /^([a-z ñáéíóú]{2,60})$/i;

   
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var adress=document.getElementById("adress");
    var comune=document.getElementById ("comune");
    var region=document.getElementById ("region");
    var receiver=document.getElementById ("receiver");

    if (!name.value){
        alert("El campo nombre es requerido");
        name.focus();
        verify=false;
    }else if(!expRegName.exec(name.value)){
        alert("El campo nombre solo acepta letras y espacios en blanco");
        name.focus();
        verify=false;
    }else if (!email.value){
        alert("El campo correo es requerido");
        email.focus();
        verify=false;
    }else if (!expRegEmail.exec(email.value)){
        alert("El campo correo esta mal escrito");
        email.focus();
        verify=false;
    }else if (!adress.value){
        alert("El campo direccion es requerido");
        adress.focus();
        verify=false;
    }else if (!expRegAdress.exec(adress.value)){
        alert("El campo direccion esta mal escrito");
        adress.focus();
        varify=false;
    }else if (!receiver.value){
        alert("El campo quien recibe es requerido");
        receiver.focus();
        verify=false;
    }else if(!expRegReceiver.exec(receiver.value)){
        alert("El campo quien recibe solo acepta letras y espacios en blanco");
        receiver.focus();
        verify=false;
    }
    }
    if(verify){
        alert("Guardado exitosamente");
}

    buttonPay=document.getElemntById("pay");
    buttonPay.onclick = validateForm;




