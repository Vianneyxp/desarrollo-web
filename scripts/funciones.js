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
saludar{"Erika"};

const carrito = [];
const agregarAlCarrito = (producto, carrito) => {
    carrito.push(producto)
    console.log("Se agregó con exito el producto")
}
const producto1 = {
    nombre: "Blusa",
    imagen: "../imagenes/blusa.jpg",
    precio: 100,
    descripcion: "variedad de blusas para dama unitalla" 
}
const producto2 = {
    nombre: "Pantalon",
    imagen: "../imagenes/jeans.jpg",
    precio: 300,
    descripcion: "stretch, amolda tu figura"
}
const producto3 = {
    nombre: "Sueter ",
    imagen: "img.jpg"
    precio: 360,
    descripcion: "Variedad ee colores, con forro doble afelpado" 
}
const producto4 = {
    nombre: "Vestido",
    imagen: "img.jpg",
    precio: 250,
    descripcion: "Vestido formal nogro" 
}
agregarAlCarrito (producto1,carrito)
agregarAlCarrito (producto2,carrito)
agregarAlCarrito (producto3,carrito)
agregarAlCarrito (producto4,carrito)

console.log(carrito)


let suma = 0;
for (i=0; i < producto.length; i++) {
    console.log ("Pago total ", suma += producto[i].precio); 
}
 agregarAlCarrito(producto[1], carrito);
 console.log ("Carrito de compras", carrito)

 for (let i=0; i < producto.length; i++) {
    console.log ("Total del carrito ", suma += producto[i].precio);
}
