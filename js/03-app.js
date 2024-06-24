const n1 =20; 
const n2 = "40";
console.log( typeof(n1),typeof(n2));
console.log( typeof(n1+n2));

// pero la coercion dice que es la conversión de tipos implicitamente o explicitamente 
console.log(n1,n2); //numero , string
console.log(n1+n2);//string

console.log(Number(n1+n2))
console.log(Number(n2))

console.log(n1.toString());

const pedido = [1,2,3,4,5];

console.log(pedido.toString());
console.log(JSON.stringify(pedido));
const pedidos = JSON.stringify(pedido)  
console.log(JSON.parse(pedidos));