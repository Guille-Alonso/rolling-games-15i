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