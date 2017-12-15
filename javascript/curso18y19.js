//Curso reactjs
// Array destructuring
const numeros = [ 1 , 2 , 3 ];
[ num1 , , num2 ] = numeros;
console.log("1.- Ejemplo Array destructuring: " + num1 , num2 );

// reference and primitive types -- Udemy react 19
// Se copia el parametro  
const variable1 = 1; 
const numero2 = variable1;
console.log("2.- Copiamos parametro por ereferencia: "+ numero2 );

const persona = {
	nombre: 'Diego armando'
};
const secondPerson = persona;
console.log("3.- persona es alamacenada en memoria y se copia a segunda persona:");
console.log(secondPerson);
persona.nombre = "Armando portillos";
console.log("4.- cambiamos valor de variable y volvemos a imprimir la variable");
console.log(secondPerson);
// 
const persona1 = {
	nombre: 'Sergio silva'
}

const persona2 = {
	...persona1
}
persona2.nombre = "Cambiamos de nombre"
console.log("5.- No se copia el puntero, se remplaza valor de variable");
console.log(persona2);


