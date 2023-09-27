const userLogged = JSON.parse(localStorage.getItem('userInfo'));
if (userLogged) {
    const loginNav = document.getElementsByClassName("loginNav");
    loginNav[0].classList.add('d-none')

    const registerNav = document.getElementsByClassName("registerNav");
    registerNav[0].classList.add('d-none')

    const searchNav = document.getElementsByClassName("searchNav");
    searchNav[0].classList.add('d-none')
   
    const logoutNav = document.getElementsByClassName("logoutNav")
    logoutNav[0].classList.remove("d-none")

    if (userLogged.admin) {
        const adminNav = document.getElementsByClassName("adminNav");
        adminNav[0].classList.remove('d-none')
    }

}

function logout(){
    localStorage.removeItem('userInfo')
  }

function sendContact(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if(validateFieldsGame(name,email,subject,message)){
        alertMessage('sent successfully','#sendForm')
        }else{
          e.preventDefault()
          alertMessage('invalid format','#sendForm')
        }
}

const validateFieldsGame = (name, email, subject, message)=>{
    const expMessage = new RegExp(/[a-zA-Z ]/);

    const nameOk = expMessage.test(name); 
    const messageOk = expMessage.test(message);
    const subjectOk = /^[a-zA-Z]*$/.test(subject); 
    const emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    if(nameOk && messageOk && subjectOk && emailOk) return true
    else return false
  }
  
  const alertMessage = (message,queryContainer)=>{
    let alertMessage = document.createElement('div'); 
    alertMessage.classList.add('alert','alert-danger','mt-3');
    alertMessage.setAttribute('role','alert');
    alertMessage.innerText = message;
    let container= document.querySelector(queryContainer);
    container.appendChild(alertMessage);
    setTimeout(()=>{
      alertMessage.remove()
    },1000)
  }