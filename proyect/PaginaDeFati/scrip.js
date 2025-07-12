document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const lista = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const iconoCarrito = document.getElementById('img-carrito');

    // Abre o cierra carrito al hacer clic en el icono
    iconoCarrito.addEventListener('click', (e) => {
        e.stopPropagation();
        carrito.classList.toggle('activo');
    });

    // Evita que clics dentro del carrito cierren el menú
    carrito.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Cierra el carrito si haces clic fuera del icono y fuera del carrito
    document.addEventListener('click', () => {
        carrito.classList.remove('activo');
    });

    cargarEventListeners();

    function cargarEventListeners() {
        elementos1.addEventListener('click', comprarElemento);
        carrito.addEventListener('click', eliminarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }

    function comprarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.closest('.service');
            leerDatosElemento(elemento);
        }
    }

    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('a').getAttribute('data-id')
        }
        insertarCarrito(infoElemento);
    }

    function insertarCarrito(elemento) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${elemento.imagen}" width="100" /></td>
            <td>${elemento.titulo}</td>
            <td>${elemento.precio}</td>
            <td><a href="#" class="borrar" data-id="${elemento.id}">X</a></td>
        `;
        lista.appendChild(row);
    }

    function eliminarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove();
        }
    }

    function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        return false;
    }
});
