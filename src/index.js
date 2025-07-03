
import { getProducts } from "./api/api.js";
import { createCards } from "./components/cards.js";
import { crearSeccionCarrito } from "./components/carrito.js";
import { filtrarProductos } from "./utils/filtrado.js";

// window.addEventListener('DOMContentLoaded', () => {
//     createCards();
// });


//localstorage
localStorage.getItem('carrito') || localStorage.setItem('carrito', JSON.stringify([]));

let input = document.querySelector('#filter');

getProducts().then((data) => {
   createCards(data);
input.addEventListener('input', (e) => {
    console.log(e.target.value);
   let filterprod = filtrarProductos(e.target.value, data);
    createCards(filterprod);
});
});
   
crearSeccionCarrito(JSON.parse(localStorage.getItem('carrito')));
