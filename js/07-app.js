console.log("primero");

setTimeout(() => {
    console.log('segundo'); 
}, 0);

console.log("tercero");

setTimeout(() => {
    console.log('cuarto');
}, 0);


new Promise( function (resolve){
    resolve('mondongo')
}).then(console.log)
console.log(new Promise( function (resolve){
    resolve('mondongo')
    .then(console.log)
}));
console.log('ultimo');