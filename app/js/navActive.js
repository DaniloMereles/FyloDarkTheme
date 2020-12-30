let navActive = ()=>{
    let hamburger = document.getElementById('navbar__hamburger')
    let navLinks = document.getElementById('navbar__links')

    hamburger.addEventListener('click', ()=>{
        navLinks.classList.toggle('active')
        if (navLinks.className == "navbar__links active") {
            hamburger.innerHTML = `
                <i class='bx bx-x'></i>
            `
        }else{
            hamburger.innerHTML = `
                <i class='bx bx-menu'></i>
            `
        }
    })
}

navActive()