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

}else{
  window.location.assign(window.location.origin + '/html/login.html')
}

const code = window.location.hash.slice(1);

const games = JSON.parse(localStorage.getItem('games'));

const game = games.find(g=> g.code == code);

const gameDetail = document.createElement('div');

gameDetail.id = game.code;

gameDetail.classList.add('row');
gameDetail.classList.add('resp');
gameDetail.innerHTML= `
<div class="col-12 d-flex flex-column align-items-center">
   
      <h1 class="text-light fuenteDetail my-2">${game.name}</h1>
    <img src="${game.image}" class="test-img my-3" alt="${game.name}">
        <div class="d-flex-col">
    <h2 class="text-light fuenteDetail mt-3">Category: ${game.category}</h2>
      <h4 class="text-light fuenteDetail">Description: ${game.description}</h4>
      </div>
    <a class="mt-3" href="error-404.html"><button class="btn btn-dark my-2 btnUbic fuenteDetail">BUY NOW</button></a>
</div>
`

let gameContainer = document.getElementById('game-container');

gameContainer.appendChild(gameDetail);

function logout(){
  localStorage.removeItem('userInfo')
}