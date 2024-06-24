//Hoisting

// Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). 


// El Código de javaScript se ejecuta en 2 partes... Creación y ejecución...

obtenerCliente('Camilo');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}








obtenerCliente2('Juan'); // Esto no va a servir..
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}
obtenerCliente2('Juan'); // ESTO SI VA A SERVIR


//  esto pasa porque al final javascript lo interpreta mas o menos asi...

// const obtenerCliente2;

// obtenerCliente2(); // Undefined ...

// // Y fiNALMENTE 
// obtenerCliente2 = function() {

// }
