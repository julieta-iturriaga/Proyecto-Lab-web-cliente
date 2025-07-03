import { crearSeccionCarrito } from "../components/carrito.js";

export function guardarProductoEnCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
   
    validarProductoEnCarrito(carrito, producto);
    guardarEnLocalStorage(carrito);
    crearSeccionCarrito(carrito);

    let modalInstance = bootstrap.Modal.getInstance(document.getElementById("exampleModal1"));
modalInstance.hide();
}

export function validarProductoEnCarrito(carrito, producto) {
    let idx = carrito.findIndex(item => item.id === producto.id);
    if (idx !== -1) {
        sumarCantidadProducto(carrito, idx);
    }
    else{
        producto.cantidad = 1;
        carrito.push(producto);
    }
}

export function guardarEnLocalStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function sumarCantidadProducto(carrito, idx) {
    carrito[idx].cantidad += 1;
    
}

export function restarCantidadProducto(carrito, idx) {
    if (carrito[idx].cantidad > 1) carrito[idx].cantidad -= 1;
    
}
export function eliminarProductoCarrito(carrito, idx) {
    carrito.splice(idx, 1);
    guardarEnLocalStorage(carrito);
}

export function actualizarTotalCarrito(carrito) {
    let total = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    let totalSpan = document.querySelector('#total-carrito');
    if (totalSpan) {
        totalSpan.innerHTML = `$${total.toFixed(2)}`;
    }
}