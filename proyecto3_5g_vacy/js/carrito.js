let productosENCarrito =localStorage.getItem("productos-EN-Carrito");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-accion-comprado");
let  botonesEliminar = document.querySelector(".carrito-producto-eliminar");
productosENCarrito = JSON.parse(productosENCarrito)
const botonVaciar = document.querySelector("#carrito-vaciar")
const botonComprar = document.querySelector("#boton-comprar")
const contenedorTotal = document.querySelector("#total")
function cargarProductosCarrito(){
if (productosENCarrito && productosENCarrito.length >0) {
    contenedorProductos.classList.remove("disabled");
    contenedorCarritoVacio.classList.add("disabled");
    contenedorProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");

    contenedorProductos.innerHTML = "";

    productosENCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
             <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" />
                      <div class="datos">
             <div class="carrito-producto-titulo">
                            <small>titulo</small>
                            <h4>${producto.titulo}</h4>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad </small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
                        `;

        contenedorProductos.append(div);
    });
} else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
}
actualizarBotonesEliminar();
actualizartotal();
};


cargarProductosCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
};

function eliminarDelCarrito(e){
    const  idboton = e.currentTarget.id;
    const  index = productosENCarrito.findIndex(producto => producto.id == idboton)
productosENCarrito.splice(index,1)
localStorage.setItem("productos-EN-Carrito", JSON.stringify(productosENCarrito));
cargarProductosCarrito();
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosENCarrito.length= 0
    localStorage.setItem("productos-EN-Carrito", JSON.stringify(productosENCarrito));

cargarProductosCarrito();

    
}

function actualizartotal () {
    const calcualcion = productosENCarrito.reduce(
        (acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    
    
  contenedorTotal.innerText = `$${calcualcion}`;

}



botonComprar.addEventListener("click", ComprarCarrito);

function ComprarCarrito() {
    productosENCarrito.length= 0
    localStorage.setItem("productos-EN-Carrito", JSON.stringify(productosENCarrito));

cargarProductosCarrito();
    contenedorCarritoVacio.classList.add("disabled");
    contenedorProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

    
}

