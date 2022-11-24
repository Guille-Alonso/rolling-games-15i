class User{
    constructor( newId, UserNameRegistration1, EmailRegistration1, PasswordRegistration1, RepeatPasswordRegistration1, AcceptanceRegistration1, admin){
        this.newId = newId
        this.UserNameRegistration1=UserNameRegistration1
        this.EmailRegistration1=EmailRegistration1
        this.PasswordRegistration1=PasswordRegistration1
        this.RepeatPasswordRegistration1=RepeatPasswordRegistration1
        this.AcceptanceRegistration1=AcceptanceRegistration1
        this.admin = admin
    }
}
let users;
if(localStorage.getItem('users')){
    users=JSON.parse(localStorage.getItem('users'))
}else{
    users=[
        new User('1', 'Maria', 'mariaflorenciagomez892@gmail.com', 'Usuario1', 'Usuario1', true, true),
    ]
    localStorage.setItem('users',JSON.stringify(users))
}

const registration = (e) => {
    e.preventDefault();
    const UserNameRegistration1 = document.getElementById('UserNameRegistration').value;
    const EmailRegistration1 = document.getElementById('EmailRegistration').value;
    const PasswordRegistration1 = document.getElementById('PasswordRegistration').value;
    const RepeatPasswordRegistration1 = document.getElementById('RepeatPasswordRegistration').value;
    const AcceptanceRegistration1 = document.getElementById('AcceptanceRegistration').value;

    const newId = new Date().getTime();
    const newUser = new User (newId, UserNameRegistration1, EmailRegistration1, PasswordRegistration1);
    if (validateFieldsRegister(UserNameRegistration1, EmailRegistration1, PasswordRegistration1, RepeatPasswordRegistration1)){
        const usersLS = JSON.parse(localStorage.getItem('users'));
        usersLS.push(newUser);
        localStorage.setItem('users', JSON.stringify(usersLS));
        alertMessage('usuario registrado', 'form'); 
        alert("registrado");
        enviarMail();
        // window.location.assign(window.location.origin + '/index.html');
    }
    else{
        console.log(validateFieldsRegister(UserNameRegistration1, EmailRegistration1, PasswordRegistration1, RepeatPasswordRegistration1))
        alertMessage('El Formato ingresado es inválido', 'form'); //se puede hacer varios if y que muestre el msj para cada campo mal ingresado.
        alert("no registrado");
    }
}
const validateFieldsRegister = (UserNameRegistration1, EmailRegistration1, PasswordRegistration1, RepeatPasswordRegistration1) => {
    const UserNameRegistration1Ok = /^[a-zA-Z0-9]*$/.test(UserNameRegistration1);
    const EmailRegistration1Ok = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(EmailRegistration1);
    const PasswordRegistration1Ok = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(PasswordRegistration1) && PasswordRegistration1 == RepeatPasswordRegistration1; //Mínimo ocho caracteres, al menos una letra y un número
    if(UserNameRegistration1Ok && EmailRegistration1Ok && PasswordRegistration1Ok) return true 
    else return false

}
function alertMessage(message, queryContainer){
    let alertMessage = document.createElement('div');
    alertMessage.classList.add('alert', 'alert-danger', 'mt-3');
    alertMessage.setAttribute('role','alert');
    alertMessage.innerText = message;
    let container = document.querySelector(queryContainer);
    container.appendChild(alertMessage);
    setTimeout(()=> {
        alertMessage.remove()
    },8000)
}

const inputs = document.querySelector('form')
function enviarMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mariaflorenciagomez1@gmail.com",
        Password : "376A9656DB2208522254251F13BF322D195A",
        To : 'mariaflorenciagomez892@gmail.com',
        From : "mariaflorenciagomez1@gmail.com",
        Subject : "New registered user!",
        Body :  "User Name: " + inputs.elements["UserNameRegistration"].value + "<br>" + "Email: " + inputs.elements["EmailRegistration"].value + "<br>" + "Password: " + inputs.elements["PasswordRegistration"].value
    }).then(message => alert(message));
}
