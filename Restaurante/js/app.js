let btnMenu = document.querySelector(".burguer");
let header = document.querySelector('.header');
// let mesa = document.querySelector('#mesa');
// let plato = document.querySelector('#platos');
 let reserva = document.querySelector('.btn-reserva');
 let form = document.querySelector('#form-modal');


btnMenu.addEventListener('click', () => {
   let menu = document.querySelector(".menu");
   menu.classList.toggle("menu-activo")
})

window.addEventListener('scroll', () => {
   header.classList.toggle("header-scroll", window.scrollY > 0);
});

reserva.addEventListener("click", factura)


function factura(e) {
   // const nombre = document.querySelector('#nombre');
   // const apellido = document.querySelector('#apellido');
   // const hora = document.querySelector('#hora');

   let inp = document.querySelectorAll(".inp");
   inp.forEach(inp => inp.value === '')

   const facturaPago = {
      nombre : document.querySelector('#nombre').value,
      apellido : document.querySelector('#apellido').value,
      hora : document.querySelector('#hora').value,
      mesa : document.querySelector('#mesa').value,
      plato : document.querySelector('#platos').value,

   }
   let {nombre,apellido,hora,mesa,plato} = facturaPago;
   let informacion = document.createElement('tr')
   let contenedor = document.querySelector('.tbody')
   informacion.innerHTML=`
   <tr class="">
   <td scope="row">${nombre}</td>
   <td>${apellido}</td>
   <td>${mesa}</td>
   <td>${plato}</td>
   <td>${hora}</td>
   
</tr>`
console.log(informacion)
contenedor.appendChild(informacion)
}
