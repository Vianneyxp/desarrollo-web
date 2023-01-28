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

// let nombre objeto={
    n
}