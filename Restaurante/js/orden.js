
const platos = document.querySelector("#platos");
const mesa = document.querySelector("#no-mesa");
const Nombre = document.querySelector("#nombre");
const muestra = document.querySelector(".card-pedido");

const plato = {
  imagen: document.querySelector('.img-thumbnail'),
  descripcion:document.querySelector(".text"),
  precio: document.querySelector('.precio'),
  orden: 1,
}
console.log(plato)
platos.addEventListener("change", platosCita)

function platosCita(e) {
  // console.log(e.target.value)
  switch (e.target.value) {
    case "2":
      
      break;
      case "3":
      console.log('yes')
      break;
      case "4":
      console.log('yes')
      break;
  
    default: muestra.removeChild();
      break;
  }
}

