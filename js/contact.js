
const validateFieldsRegister = (UserNameRegistration1, EmailRegistration1, PasswordRegistration1, RepeatPasswordRegistration1) => {
    const YourName = /^[a-zA-Z0-9]*$/.test(YourName);
    const YourEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(YourEmail);

function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }

//valido el interés
if (document.fvalida.interes.selectedIndex==0){
    alert("Debe seleccionar un motivo de su contacto.")
    document.fvalida.interes.focus()
    return 0;
}

//el formulario se envia
alert("Thank you very much for contacting with Strong Games");
document.fvalida.submit();
}


function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }
    
    