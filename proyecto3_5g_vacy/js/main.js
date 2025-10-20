// PRODUCTOS
const productos = [
    // Abrigos
  {
    id: "abrigo-01",
    titulo: "Abrigo 01",
    imagen: "./img/abrigos/01.jpg",
    categoria: { nombre: "Abrigos", id: "abrigos" },
    precio: 1850
  },
  {
    id: "abrigo-02",
    titulo: "Abrigo 02",
    imagen: "./img/abrigos/02.jpg",
    categoria: { nombre: "Abrigos", id: "abrigos" },
    precio: 2100
  },
  {
    id: "abrigo-03",
    titulo: "Abrigo 03",
    imagen: "./img/abrigos/03.jpg",
    categoria: { nombre: "Abrigos", id: "abrigos" },
    precio: 1950
  },
  {
    id: "abrigo-04",
    titulo: "Abrigo 04",
    imagen: "./img/abrigos/04.jpg",
    categoria: { nombre: "Abrigos", id: "abrigos" },
    precio: 2300
  },
  {
    id: "abrigo-05",
    titulo: "Abrigo 05",
    imagen: "./img/abrigos/05.jpg",
    categoria: { nombre: "Abrigos", id: "abrigos" },
    precio: 2500
  },

  // Camisetas
  {
    id: "camiseta-01",
    titulo: "Camiseta 01",
    imagen: "./img/camisetas/01.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 350
  },
  {
    id: "camiseta-02",
    titulo: "Camiseta 02",
    imagen: "./img/camisetas/02.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 400
  },
  {
    id: "camiseta-03",
    titulo: "Camiseta 03",
    imagen: "./img/camisetas/03.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 320
  },
  {
    id: "camiseta-04",
    titulo: "Camiseta 04",
    imagen: "./img/camisetas/04.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 380
  },
  {
    id: "camiseta-05",
    titulo: "Camiseta 05",
    imagen: "./img/camisetas/05.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 420
  },
  {
    id: "camiseta-06",
    titulo: "Camiseta 06",
    imagen: "./img/camisetas/06.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 390
  },
  {
    id: "camiseta-07",
    titulo: "Camiseta 07",
    imagen: "./img/camisetas/07.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 410
  },
  {
    id: "camiseta-08",
    titulo: "Camiseta 08",
    imagen: "./img/camisetas/08.jpg",
    categoria: { nombre: "Camisetas", id: "camisetas" },
    precio: 360
  },

  // Pantalones
  {
    id: "pantalon-01",
    titulo: "Pantalón 01",
    imagen: "./img/pantalones/01.jpg",
    categoria: { nombre: "Pantalones", id: "pantalones" },
    precio: 780
  },
  {
    id: "pantalon-02",
    titulo: "Pantalón 02",
    imagen: "./img/pantalones/02.jpg",
    categoria: { nombre: "Pantalones", id: "pantalones" },
    precio: 850
  },
  {
    id: "pantalon-03",
    titulo: "Pantalón 03",
    imagen: "./img/pantalones/03.jpg",
    categoria: { nombre: "Pantalones", id: "pantalones" },
    precio: 920
  },
  {
    id: "pantalon-04",
    titulo: "Pantalón 04",
    imagen: "./img/pantalones/04.jpg",
    categoria: { nombre: "Pantalones", id: "pantalones" },
    precio: 890
  },
  {
    id: "pantalon-05",
    titulo: "Pantalón 05",
    imagen: "./img/pantalones/05.jpg",
    categoria: { nombre: "Pantalones", id: "pantalones" },
    precio: 970
  }

    //perfumes
    , {
        id: "perfume-hombre-01",
        titulo: "Bleu de Chanel",
        imagen: "./img/perfume/5.jpg",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2450
    },
    {
        id: "perfume-hombre-02",
        titulo: "Dior Sauvage",
        imagen: "./img/perfume/1.jpg",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2600
    },
    {
        id: "perfume-hombre-03",
        titulo: "Acqua di Giò",
        imagen: "./img/perfume/2.jpg",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2100
    },
    {
        id: "perfume-hombre-04",
        titulo: "Le Male",
        imagen: "./img/perfume/3.jpg",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 1950
    },
    {
        id: "perfume-hombre-05",
        titulo: "Invictus",
        imagen: "./img/perfume/4.jpg",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2200
    },
    {
        id: "perfume-hombre-06",
        titulo: "Terre d’Hermès",
        imagen: "./img/perfume/6.webp",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2750
    },
    {
        id: "perfume-mujer-01",
        titulo: "La Vie Est Belle",
        imagen: "./img/perfume/7.webp",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2350
    },
    {
        id: "perfume-mujer-02",
        titulo: "Chanel No. 5",
        imagen: "./img/perfume/8.avif",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 3100
    },
    {
        id: "perfume-mujer-03",
        titulo: "Good Girl",
        imagen: "./img/perfume/9.webp",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2450
    },
    {
        id: "perfume-mujer-04",
        titulo: "J’adore",
        imagen: "./img/perfume/10.webp",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2700
    },
    {
        id: "perfume-mujer-05",
        titulo: "Flowerbomb",
        imagen: "./img/perfume/11.webp",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2550
    },
    {
        id: "perfume-mujer-06",
        titulo: "Si",
        imagen: "./img/perfume/12.webp",
        categoria: {
            nombre: "perfume",
            id: "perfume"
        },
        precio: 2400
    }
];

const ContenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipla = document.querySelector("#titulo-Principal");
let  botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarproductos(productoselejidos) {

    ContenedorProductos.innerHTML = "";
    productoselejidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
           <img class="producto-imgen" src="${producto.imagen}" alt="${producto.titulo}" />
                    <div class="producto-detalles">
                        <H3 class="producto-titulo">${producto.titulo}</H3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `;
        ContenedorProductos.append(div);
    })
    actualizarBotonesAgregar()
}

cargarproductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove('active'))
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipla.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarproductos(productosBoton);
        } else {
            tituloPrincipla.innerText = "Todos los productos"
            cargarproductos(productos);

        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosENCarrito;
let productosENCarritoLS= localStorage.getItem("productos-EN-Carrito");
if (productosENCarritoLS){
  productosENCarrito =JSON.parse( productosENCarritoLS);
  actualizarNumerito();
}else {
 productosENCarrito = [];
}


function agregarAlCarrito(e) {

    const idboton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idboton);

    if (productosENCarrito.some(producto => producto.id === idboton)) {
        const index = productosENCarrito.findIndex(producto => producto.id === idboton);
        productosENCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosENCarrito.push(productoAgregado);

    }
    actualizarNumerito();
localStorage.setItem("productos-EN-Carrito", JSON.stringify(productosENCarrito));

};
 actualizarNumerito();
function actualizarNumerito() {
    let nuevoNumerito = productosENCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
numerito.innerText = nuevoNumerito;
}


// para  los mensages
// Simula agregar productos
document.querySelector('#add-to-cart-button').addEventListener('click', () => {
  showFloatingMessage('Café gourmet');
});