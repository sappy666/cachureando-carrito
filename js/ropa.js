// Validación de Formulario de calzado, chaquetas, tops, pantalones
let buttonPay=document.getElementById("pay");

buttonPay.onclick = function(){
//function validateForm() {
    var verify=true;
    var expRegName = /^([a-z ñáéíóú]{2,60})$/i;  
    var expRegEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
    var expRegAdress = (/^[A-Za-z0-9\s]+$/g);
    var expRegComune = /^([a-z ñáéíóú]{2,60})$/i;  
    var expRegRegion = /^([a-z ñáéíóú]{2,60})$/i; 
    var expRegReceiver =  /^([a-z ñáéíóú]{2,60})$/i;

   
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
        verify=false;
    }else if (!comune.value){
        alert("El campo comuna es requerido");
        comune.focus();
        verify=false;
    }else if (!expRegComune.exec(comune.value)){
        alert("El campo comuna esta mal escrito");
        comune.focus();
        verify=false;
    }else if (!region.value){
        alert("El campo region es requerido");
        region.focus();
        verify=false;
    }else if (!expRegRegion.exec(region.value)){
        alert("El campo region esta mal escrito");
        region.focus();
        verify=false;
    }else if (!receiver.value){
        alert("El campo quien recibe es requerido");
        receiver.focus();
        verify=false;
    }else if(!expRegReceiver.exec(receiver.value)){
        alert("El campo quien recibe solo acepta letras y espacios en blanco");
        receiver.focus();
        verify=false;
    }
    
    if(verify){
        alert("Guardado exitosamente");
}
}





