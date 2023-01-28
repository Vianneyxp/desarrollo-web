let nombre = false
let facebook = "Reny_X"
let instagram = "Reny_X"
let whatsapp = 2216483979
const mail  = "erikavianneyxilot@gmail.com"
console.log (nombre)
console.log ( {facebook,instagram} );
console.log (whatsapp)
console.log (mail)

let usualrio = prompt ("Hola como te llamas?")
let edadDelUsuario = prompt ("cuantos años tienes?")
alert("Hola " + usualrio + " bienvenido a Reny")

alert(`Contactanos en nuestra pagina de facebook ${facebook} o via whatsapp ${whatsapp}`)
let pantalones = 21
let chamarras = 10
let sueteres = 12
let blusas = "21"
pantalones+chamarras+sueteres=conjunto
console.log (conjunto)
pantalones==blusas
console.log (pantalones==blusas)

function sumarParametros (invierno, primavera, verano) {
    const resultados = invierno + primavera + verano;
    console.log (resultados);
}
sumarParametros(10,21,12);

function comparacion (primavera, verano) {
    if (primavera:<verano) (
        console.log ("Aprovecha la gran variedad de articulos de Verano")
    ) else if (verano==primavera) {
        console.log("Temporada primavera-verano") 
    } else { console.log("Aprovecha la gran variedad de articulos de primavera")  }
    }
comparacion{21, 12}

sumarParametros(10,21,12);

const verificacion = (primavera, verano) => console.log('La temporada ${primavera} esta acompañada de {verano}');
 verificacion(primavera, "variedad");
 


//objetos
const usuario1 = {
    nombre: "Diana",
    email: "diana@gmail.com",
    estado: "Puebla",
    acceso: true,
    unaFuncion: (a, b) => a + b
    talla:{
        sexo:"femenino",
        peso:62,
        alturaEncm:158
    },
    gustos: preferenciaUsuario
}
console.log(usuario1.talla.peso);

//Desestructuracion 
const (nombre, estado, email) = usuario1;
console.log(nombre, estado, email);

const retornarUsuario = ({nombre, estado}) => {
    console.log(nombre, estado)
}

retornarUsuario(usuario1)

