class User{
    constructor ( Id, name, age, email, password,admin ){

        this.Id = Id
        this.name= name
        this.age = age
        this.email = email
        this.password = password
        this.admin = admin
    }
}

class Game{
    constructor(code, name, category,description, published, fav,image){
      this.name = name;
      this.code = code;
      this.category = category;
      this.description = description;
      this.published = published;
      this.fav = fav;
      this.image = image;
    }
  }

class Category{
    constructor(id, name){
      this.id = id;
      this.name = name;
    }
  }

let users ;

if (localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem ('users'))
} else{
users = [
        new User (1,'Florencia Gomez', 25,'FlorG15i@gmail.com', '123456',true),
        new User(2,'Stella',25,'stella@gmail.com','12345678',true),
        new User(3,'Guille',25,'guilleplate@gmail.com','123456',false),
        new User(4,'Nicolas Pereira',26,'nico@gmail.com','123456',true),
        new User(5,'Favio',25,'fav10@gmail.com','123456',true),
        new User (6,'Rosario', 25,'Rolli@gmail.com', '123456',true),
    ]
    localStorage.setItem("users", JSON.stringify(users))
}

//juegos hardcodeados
if (localStorage.getItem('games')){
    console.log("no");
    let juegos = JSON.parse(localStorage.getItem('games'))
} else{
    console.log("si");
    let cat = new Category (1,"gaming")
    let cats=[]
    cats.push(cat)
    let juegos = [
        new Game(1,"gta vice city",cat.name,"grand theft auto",true,true,"https://img.unocero.com/2021/08/grand-theft-auto-vice-city-2-descargar-1-1.jpg"),
        new Game(2,"cs go",cat.name,"counter strike",true,false,"https://www.global-esports.news/wp-content/uploads/2022/04/Source-2-in-CSGO-%E2%80%93-Dataminer-1.png"),
        new Game(3,"call of duthy",cat.name,"sice 1950",true,true,"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/01/call-of-duty.jpeg?fit=1920%2C1080&quality=50&strip=all&ssl=1"),
      
    ]
    localStorage.setItem("games", JSON.stringify(juegos))
    localStorage.setItem('categories',JSON.stringify(cats))
}


const login = (e)=>{
    e.preventDefault(); 

    const email = document.getElementById('values-email').value;
    const password = document.getElementById('values-password').value;
    const userFound = users.find(user=>user.email===email);
    if(userFound){
        const isOk = userFound.password===password
    if(isOk){
    localStorage.setItem('userInfo',JSON.stringify(userFound));
    console.log(userFound);
    window.location.assign(window.location.origin +'/html/main.html');
    }else{
        alertMessage('contraseña erronea','form')
    }
    
    }else{
    alertMessage('email incorrecto','form')
    }
}

    function alertMessage (message,queryContainer){
    let alertMessage = document.createElement('div');
    alertMessage.classList.add('alert','alert-primary','mt-3');
    alertMessage.setAttribute('role','alert');
    alertMessage.innerText = message;
    let container= document.querySelector(queryContainer); 
    container.appendChild(alertMessage);
    setTimeout(()=>{
    alertMessage.remove()
    },600)
}





document.querySelector(".show-password-btn").addEventListener("click",function(){

    var passwordInput = document.getElementById("values-password");
    if(passwordInput.type == 'password') {
        passwordInput.type = 'text'
    }else {
        passwordInput.type = 'password';
    }

});





const toggle = document.getElementById('toggle');
const body = document.getElementsByTagName('body');

toggle.addEventListener('click', function (){
    body[0].classList.toggle('dark-theme');
});




const validateFieldsRegister = (email, password)=>{
    const emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const passOk =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    if(emailOk && passOk) return true
    else return false
}



const password = (e)=>{
    e.preventDefault(); 
}



function auxiliarSendMail(){
    
    const recover = document.getElementById("exampleInputEmail1").value;
    sendMail(recover)
    console.log(recover);
}

function sendMail(correo) {
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "StrongGames@gmail.com",
    Password : "1FF483AAF7F70E6D221626942F0E2D40297B",
    To : `${correo}`,
    From : "nicobenpe@gmail.com",
    Subject : "Thank you very much for subscribing",
    Body : "We are very happy to have your subscription. Every week you will receive discount. Strong Games for you" 
}).then(message => alert(message));
}


