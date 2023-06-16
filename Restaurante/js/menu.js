let btnMenu = document.querySelector(".burguer");
let corazones = document.querySelectorAll('.like-check');
let btnPago = document.querySelectorAll('.btn-success');
console.log(corazones)


console.log(btnPago)

btnPago.forEach(btn => {
   btn.addEventListener("click", modalPago)
})


btnMenu.addEventListener('click', () => {
   let menu = document.querySelector(".menu");
   menu.classList.toggle("menu-activo")
})

corazones.forEach(corazon => {
   corazon.addEventListener('click', like)
})

function like(e) {
   // e.target.classList.toggle(".like-checked")
   if( e.target.classList.contains("like-check") ) {
      e.target.classList.remove('like-check');
      e.target.classList.add("like-checked")
  } else {
      e.target.classList.add('like-check');
      e.target.classList.remove('like-checked');
  }

  if (e.target.classList.contains("'like-checked")) {
   
  }


}

function modalPago(e) {
   console.log(e.target.parentElement)
   console.log(e.target.parentElement.parentElement.nextSibling
      )
}