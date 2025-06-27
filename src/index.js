
import { createCards } from "./components/cards.js";
import { crearSeccionCarrito } from "./components/carrito.js";

// window.addEventListener('DOMContentLoaded', () => {
//     createCards();
// });


//localstorage
localStorage.getItem('carrito') || localStorage.setItem('carrito', JSON.stringify([]));
createCards();

crearSeccionCarrito(JSON.parse(localStorage.getItem('carrito')));
