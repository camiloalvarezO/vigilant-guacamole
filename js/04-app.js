// implicit binding consiste que le decimos al objeto de donde va a sacar los datos


const info = {
    nombre : "camilo",
    edad : 26,
    mostrarNombre(){
        console.log(`mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    mascota : {
        nombre: "hook",
        edad : 3,
        mostrarNombre(){
            console.log(`mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
    }
}

info.mostrarNombre()
info.mascota.mostrarNombre();