import { createModal } from "./modal.js";
import { generarEstrellas } from "../utils/estrellas.js";


export function createCards(data){
    let containerCards = document.querySelector('#list-products');   
    containerCards.innerHTML = '';
    
 window.mostrarDetalle = (prod) =>{
             createModal(prod); // Llama a createModal con los datos del producto
        };
        data.forEach((p) => {
            let estrellasProducto = p.rating?.rate ? generarEstrellas(p.rating.rate) : '';
            let template = `<div class="col"> 
                    <div class="card h-100 shadow-sm border-0">
                    <img src="${p.image}" class="card-img-top img-fluid" alt="${p.title}" style="height: 350px; object-fit: contain">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${p.title}</h5>
                         <div class="mb-2">
                            ${estrellasProducto}
                        </div>
                        <button type='button' class='btn btn-primary mt-auto mx-auto' 
                        onclick='mostrarDetalle(${JSON.stringify(p).replace(/'/g, "&#39;").replace(/"/g, '&quot;')})'

                        id="${p.id}"> Más detalles </button>

                    </div>
                    </div>
                </div>`;
            containerCards.innerHTML += template

   
    });
}