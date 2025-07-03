function mostrarModalContacto() {
  const modalContacto = document.getElementById('modalcontacto');
  
  modalContacto.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Integrantes del grupo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <p>Julieta Iturriaga - Pablo Britez Santana</p>
          <p>Materia: Laboratorio Aplicaciones Web Cliente - ISTEA</p>
          <p>GitHub: <a href="https://github.com/julieta-iturriaga/Proyecto-Lab-web-cliente" target="_blank" rel="noopener noreferrer">https://github.com/julieta-iturriaga/Proyecto-Lab-web-cliente</a></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  `;
  
  const modalBootstrap = new bootstrap.Modal(modalContacto);
  modalBootstrap.show();
}
document.querySelector('a.nav-link[href="#"]').addEventListener('click', (e) => {
  e.preventDefault();

  mostrarModalContacto();
});
