const producto = [
    {id: 1, nombre: "Blusa", precio: 100, img: "./img/blusa.jpg", talla: "U"},
    {id: 2, nombre: "Pantalon", precio: 300, img: "./img/jeans.jpg", talla: "Ch, M, G"},
    {id: 3, nombre: "Vestido niña", precio: 250, img: "./img/vestidon.jpg", talla: "Ch"},
    {id: 4, nombre: "Mameluco", precio: 220, img: "./img/mamelucos.jpg", talla: "Ch, M"},
    {id: 5, nombre: "Chamarra", precio: 350, img: "./img/chamarra.jpg", talla: "G, Ex"},
    {id: 6, nombre: "Sudadera", precio: 280, img: "./img/sudaderas.jpg", talla: "M, G, Ex"},
];

var caja = document.getElementById("cajita")

const imprimirProductos = () => {
    caja.innerHTML = ''
    producto.forEach(pro => {
        caja.innerHTML += "<div class='col-sm-4'> <div class='card'> <img src='" + pro.img + "' class='card-img-top img-tarjeta' alt='Imagen de producto 3'><div class='card-body'><h5 class='card-title'>" + pro.nombre + "</h5><p class='card-text'>Tallas: " + pro.talla + "</p><p class='card-text'><small class='text-muted'>Precio: $" + pro.precio + " </small><button type='button' class='btn btn-primary btnAgregar' id='" + pro.id + "'>Agregar</button><button type='button' class='btn btn-warning btnEliminar' id='" + (pro.id-(pro.id*2)) + "'>Eliminar</button></p></div></div></div>";
    });
    funcionAgregar()
    funcionEliminar()
}

imprimirProductos()

const muestraCarro = document.getElementById('productos')
const consultaCarrito = document.getElementById('carro')
const totalCompra = document.getElementById('total')
const contador = document.getElementById('contador')
const btnComprar = document.getElementById('btnComprar')

localStorage.setItem('carrito', JSON.stringify([]))
var carro = localStorage.getItem('carrito')

function funcionAgregar() {
    const btnAgregar = document.querySelectorAll('.btnAgregar')

    btnAgregar.forEach(function(boton) {
        boton.addEventListener('click', () => agregarAlCarrito(boton.id))
    });

    const agregarAlCarrito = (p) => {
        const micarro = JSON.parse(carro);
        for (let i = 0; i < producto.length; i++) {
            if(producto[i].id == p){
                micarro.push(producto[i])
                i=producto.length
            }
        }
        contador.innerText = micarro.length
        const carroNuevo = JSON.stringify(micarro)
        localStorage.setItem('carrito', carroNuevo)
        carro = localStorage.getItem('carrito')
    };
}

function funcionEliminar() {
    const btnEliminar = document.querySelectorAll('.btnEliminar')

    btnEliminar.forEach(function(botonE) {
        botonE.addEventListener('click', () => eliminarDelCarrito(botonE.id*-1))
    });

    const eliminarDelCarrito = (p) => {
        const micarro = JSON.parse(carro);
        for (let i = 0; i < micarro.length; i++) {
            if(micarro[i].id == p){
                micarro.splice(i, 1)
                i=micarro.length
            }
        }
        contador.innerText = micarro.length
        const carroNuevo = JSON.stringify(micarro)
        localStorage.setItem('carrito', carroNuevo)
        carro = localStorage.getItem('carrito')
    };
}

btnComprar.addEventListener('click', () => Comprar())

function Comprar() {
    const micarro = JSON.parse(carro);
    if(micarro.length >= 1){
        alert(micarro.length + " productos comprados correctamente")
        micarro.splice(0, micarro.length)
        contador.innerText = micarro.length
    } else{
        alert("Debes agregar un producto como mínimo")
    }
    const carroNuevo = JSON.stringify(micarro)
    localStorage.setItem('carrito', carroNuevo)
    carro = localStorage.getItem('carrito')
}

consultaCarrito.addEventListener('click', () => mostrarCarrito())

function mostrarCarrito() {
    const micarro = JSON.parse(carro);
    let total = 0
    muestraCarro.innerHTML = ''
    micarro.forEach(elemento => {
        muestraCarro.innerHTML += "<tr><td>" + elemento.nombre + "</td><td>" + elemento.precio + "</td></tr>";
    });

    micarro.forEach(producto => {
        total += producto.precio
    });

    totalCompra.innerText = " $" + total;
    const carroNuevo = JSON.stringify(micarro)
    localStorage.setItem('carrito', carroNuevo)
    carro = localStorage.getItem('carrito')
}

btnAcendente = document.getElementById('ordenAcendente')
btnDecendente = document.getElementById('ordenDecendente')

btnAcendente.addEventListener('click', () => Ordenar('acendente'))
btnDecendente.addEventListener('click', () => Ordenar('decendente'))

const Ordenar = (orden) =>{
    if (orden == 'decendente') {
        producto.sort(function(a, b) {
            return b.precio - a.precio
        })
    } else {
        producto.sort(function(a, b) {
            return a.precio - b.precio
        })
    }
    imprimirProductos()
}