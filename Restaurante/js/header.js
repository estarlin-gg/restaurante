const btnMenu = document.querySelector(".burguer-img");

btnMenu.addEventListener('click', () => {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("menu-visible")
 })
