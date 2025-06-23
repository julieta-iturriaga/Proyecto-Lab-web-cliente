export function createModal(producto) {
  let containerModal = document.querySelector('#exampleModal1');

  let template = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${producto.image}" class="card-img-top img-fluid mb-3" alt="${producto.title}" style="height: 350px; object-fit: contain">
          <p>${producto.description}</p>
          <p><strong>Price:</strong> $${producto.price}</p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary"><span><i class="bi bi-cart4"></i></span> Añadir al carrito</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>`;

  containerModal.innerHTML = template;

  // Mostrar el modal
  let modalBS = new bootstrap.Modal(containerModal);
  modalBS.show();
}
