function saludar() {
    console.log("Hola bienbenido a Reny")
}

//FILTER
const prendasfiltros = prendas.filter(item => item.precio > 300);
console.log ("Las prendas más caras de la tienda son:", prendasfiltros);

const filtradoPorEstilo = prendas.filter(item => item.estilo.includes("sport"));
console.log ("Los productos que son sport son:", filtradoPorEstilo);

//FIND
const prendaElegida = prenda.find (e => e.id === 7);
console.log ("El carrito tiene:", carrito):
agregarAlCarrito (prendaElegida, carrito)

const mitadPrecio = prenda.map (item => item.precio / 2);
console.log ("El precio de la prenda con descuento es de:", mitadPrecio);

//ARRON FUNCTION
const saludar = {} => 
    console.log ("hola" + nombre + "bienvenuido a Reny");
saludar {"Erika"};

const producto = [
    {id: 1, nombre: "Blusa", precio: 100, img: "img.jpg", talla: "U"},
    {id: 2, nombre: "Pantalon", precio: 300, img: "img.jpg", talla: "Ch, M, G"},
    {id: 3, nombre: "Vestido niña", precio: 250, img: "img.jpg", talla: "Ch"},
    {id: 4, nombre: "Mameluco", precio: 220, img: "img.jpg", talla: "Ch, M"},
    {id: 5, nombre: "Sueter", precio: 350, img: "img.jpg", talla: "G, Ex"},
    {id: 6, nombre: "Sudadera", precio: 280, img: "img.jpg", talla: "M, G, Ex"},
];

let precios = [1, 2, 3, 4, 5, 6];
const suma = precios.reduce[(acumulador, el) => acumulador + el]
console.log(suma/6);

const precioProducto =producto.filter(elemento => elemento.precio > 200)
console.log(precioProducto); 

const carrito = [];
const agregarAlCarrito = (producto, carrito) => {
    carrito.push(producto)
    console.log("Se agregó con exito el", producto);
};

producto.forEach(precioProducto => {
    console.log(precioProducto.precio)
});
 
agregarAlCarrito (producto, carrito)
//agregarAlCarrito (producto1,carrito)
//agregarAlCarrito (producto2,carrito)
//agregarAlCarrito (producto3,carrito)
//agregarAlCarrito (producto4,carrito)

//console.log(carrito)


let suma = 0;
for (i=0; i < producto.length; i++) {
    console.log ("Pago total ", suma += producto[i].precio); 
}
 agregarAlCarrito(producto[1], carrito);
 console.log ("Carrito de compras", carrito)

 for (let i=0; i < producto.length; i++) {
    console.log ("Total del carrito ", suma += producto[i].precio);
}

const ordenAlfabetico = producto.sort ((elemento1,elemento2)=> {
    if (elemento1.nombre === elemento2.nombre) {
        return 0
    } else if (elemento1.nombre < elemento2.nombre) {
    } else {
        return 1
    }
});
console.log ("Productos ordenados alfabeticamente", ordenAlfabetico)

const mayorAmenoor = producto.sort ((elemento1,elemento2)=> {
    if (elemento1.precio === elemento2.precio) {
        return 0
    } else if (elemento1.nombre > elemento2.nombre) {
    } else {
        return 1
    }
});


