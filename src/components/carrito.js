import { sumarCantidadProducto, guardarEnLocalStorage, restarCantidadProducto, eliminarProductoCarrito,  actualizarTotalCarrito } from "../utils/carritoStorage.js";

export function crearSeccionCarrito(carrito) {
    let containerCarrito = document.querySelector('.offcanvas-body');
    containerCarrito.innerHTML = '';


    carrito.forEach ((c) => {
    let template = `<div class="card mb-3" id="card-${c.id}"style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${c.image}" class="img-fluid rounded-start" alt="${c.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-truncate">${c.title}</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="">
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <button class="btn btn-outline-primary" onclick='restarCantidad(${c.id})'>-</button>
                                            <span id="qty-${c.id}">${c.cantidad}</span>
                                            <button class="btn btn-outline-primary" onclick='sumarCantidad(${c.id})'>+</button>
                                        </div>
                                        <div>
                                            <span class="fw-bolder" id="price-${c.id}">$${(c.price * c.cantidad).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="btn btn-outline-danger" onclick='eliminarProducto(${c.id})'>
                                        <i class="bi bi-trash3"></i></button>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        containerCarrito.innerHTML += template;
    });
    containerCarrito.innerHTML += `
        <div class="mt-3 d-flex justify-content-between fw-bold">
            <span>Total:</span>
            <span id="total-carrito">$0.00</span>
        </div>
    `;
     actualizarTotalCarrito(carrito);

    window.sumarCantidad = (id) => {
        let idx = carrito.findIndex(item => item.id === id);
        sumarCantidadProducto(carrito, idx);
        guardarEnLocalStorage(carrito);
        actualizarTotalCarrito(carrito);
        actualizarSpanCantidad(id, carrito[idx].cantidad);
    }

    window.restarCantidad = (id) => {
        let idx = carrito.findIndex(item => item.id === id);
        restarCantidadProducto(carrito, idx);
        guardarEnLocalStorage(carrito);
        actualizarTotalCarrito(carrito);
        actualizarSpanCantidad(id, carrito[idx].cantidad);
    }

    window.eliminarProducto = (id) => {
        let idx = carrito.findIndex(item => item.id === id);
        eliminarProductoCarrito(carrito, idx);
        let card = document.querySelector(`#card-${id}`);
        containerCarrito.removeChild(card);
        actualizarTotalCarrito(carrito);
        actualizarSpanCantidad(id, carrito[idx].cantidad);
        
    }
}

function actualizarSpanCantidad(id, cantidad) {
    let qtySpan = document.querySelector(`#qty-${id}`);
    let priceSpan = document.querySelector(`#price-${id}`);
    qtySpan.innerHTML = '';
    qtySpan.innerHTML = cantidad;

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = carrito.find(p => p.id === id);

    if (priceSpan && producto) {
        priceSpan.innerText = `$${(producto.price * producto.cantidad).toFixed(2)}`;
    }
}