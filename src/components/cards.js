import { getProducts } from "./../api/api.js";
<<<<<<< HEAD
=======
import { createModal } from "./modal.js";
>>>>>>> 686df8c (23-06-2025 Pablo Britez Santana)

export function createCards(){
    let containerCards = document.querySelector('#list-products');   
    
    getProducts().then((data) => {
        window.mostrarDetalle = (prod) =>{
            console.log('Hola desde el evento>>', prod)
<<<<<<< HEAD
=======
             createModal(prod); // Llama a createModal con los datos del producto
>>>>>>> 686df8c (23-06-2025 Pablo Britez Santana)
        };


        data.forEach((p) => {
            let template = `<div class="col"> 
                    <div class="card h-100 d-flex flex-column">
                    <img src="${p.image}" class="card-img-top img-fluid" alt="${p.title}" style="height: 350px; object-fit: contain">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${p.title}</h5>
<<<<<<< HEAD
                        <button type= 'button' class='btn btn-primary mt-auto mx-auto' onclick='mostrarDetalle(${JSON.stringify(p)})' id="${p.id}"> Más detalles </button>
=======
                        <button type='button' class='btn btn-primary mt-auto mx-auto' 
    
                        onclick='mostrarDetalle(${JSON.stringify(p).replace(/'/g, "&#39;").replace(/"/g, '&quot;')})'

                        id="${p.id}"> Más detalles </button>

>>>>>>> 686df8c (23-06-2025 Pablo Britez Santana)
                    </div>
                    </div>
                </div>`;
            containerCards.innerHTML += template
            
        });
    });
}