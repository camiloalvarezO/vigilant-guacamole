
self.onload = ()=>{
    console.log("ventana cargada");
}

// const producto = {
//     nombre : `monitor 20 pulgadas`,
//     precio : 40,
//     disponible : true,
//     mostrarInfo: function(){
//         const self = this
//         return console.log(`el producto ${self.nombre} tiene un precio de ${self.precio}`);
//     }
// }




// window.nombre = `mondongo`;  // no funcionaría porque se refiere al ambito local del objeto
// const producto = {
    
//     precio : 40,
//     disponible : true,
//     mostrarInfo: function(){
//         const self = this
//         return `el producto ${self.nombre} tiene un precio de ${self.precio}`;
//     }

// }


window.nombre = `mondongo`;  //  funcionaría porque se refiere a la ventana global 
window.precio = 23234;
const producto = {
    
    precio : 40,
    disponible : true,
    mostrarInfo: function(){
        
        return `el producto ${self.nombre} tiene un precio de ${window.precio}`; // precio sería 
        // colocarlo en la ventana global como self o window
    }

}

console.log(  producto.mostrarInfo());