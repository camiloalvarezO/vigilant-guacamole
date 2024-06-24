function Auto(modelo,color){ 
    this.modelo = modelo,
    this.color = color
}


const carro = new Auto('Audi','Rojo') // EL NEW binding dice que cuando creamos un objeto tenemos
// desbloqueado el this para saber que va a usar de su clase el nuevo objeto recien creado 

console.log(carro);

// window binding
window.color = "blanco" // busca en la ventana global una variable 
function hola(){
    console.log(color);
}
hola();