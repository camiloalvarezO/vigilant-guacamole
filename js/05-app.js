
//la maravilla del explicit binding; cine
function persona(el1,el2){
    console.log(`mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const cliente = {
    nombre : "camilo"
}

const canciones = ["jazz","merengue"];

persona.call(cliente, canciones[0],canciones[1]) // toca pasarle casi que todo de forma individual, por lo menos en los
// arreglos toca decirle cuales son las posiciones que queremos pasar

persona.apply(cliente,canciones) // tranquilamente se le puede pasar los datos directamente 
// pero tendria que ser cuidadoso con la posición de todo

const fn =persona.bind(cliente, canciones[0], canciones[1]) // como un call, solo que toca estar pasandole las posiciones
// te crea una nueva función y es similar a call

fn()