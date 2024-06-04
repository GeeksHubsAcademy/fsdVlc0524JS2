//CONDICIONALES

// var edad = 15;

// //IF
// if(edad > 18){
//     console.log("Tienes, como mínimo, 19 años");
// }

// //IF / ELSE
// if(edad > 18){
//     console.log("Tienes, como mínimo, 19 años");
// }else {
//     console.log("Tienes 18 años o menos.");
// };

// var dia = "jueves";

// //IF / ELSE IF / ELSE
// if (dia == "lunes") {
//   console.log("lunes");
// } else if (dia == "martes") {
//   console.log("martes");
// } else if (dia == "miercoles") {
//   console.log("miercoles");
// } else {
//   console.log("cualquier otro día.....");
// }

// //En el límite, si puede ser un sólo else if mejor...

// //SWITCH
// switch (dia) {
//   case "lunes":
//     console.log("lunes");
//     break;

//   case "martes":
//     console.log("martes");

//     break;

//   case "miercoles":
//     console.log("miercoles");

//     break;

//   case "jueves":
//     console.log("jueves");

//     break;

//   case "viernes":
//     console.log("viernes");

//     break;

//   default:
//     console.log("yo que se tio...");
// }

// /////////////////////////////////////

// var pelicula = "The Matrix";

// //TERNARY OPERATOR
// pelicula == "The Matrix"
//     ? console.log("Neo")
//     : console.log("Nada");

// if(pelicula == "The Matrix"){
//     console.log("Neo");
// }else{
//     console.log("Nada");
// };

// //Son LO MISMO.

//NESTED IFS

// var film = "Aliens";
// var popcorn = true;

// if (film === "Aliens") {
//   if (popcorn === true) {
//     console.log("vas a ver Aliens y comer palomitas");
//   }
// }

// if (film === "Aliens" && popcorn) {
//   console.log("vas a ver Aliens y comer palomitas");
// }

// film === "Aliens" && popcorn
//   ? console.log("Vas a ver Aliens y comer palomitas")
//   : console.log("Nada");

// var nota = prompt("Dime que nota has sacado....");

// console.log(nota);

// switch(variable){
//     case "lunes":
//         console.log("lunes")
//     break;

//     case "martes":
//         console.log("martes")
//     break;

//     case "miercoles":
//         console.log("miercoles")
//     break;

//         default:
//             console.log("otro día")
// }

// let nota = prompt("Escribe tu nota aqui?");
// switch (nota) {
//   case "1":
//   case "2":
//   case "3":
//   case "4":
//     console.log("Tu nota es insuficiiente!");
//     break;
//   case "5":
//   case "6":
//     console.log("Tu nota es suficiente, para pasar");
//     break;
//   case "7":
//   case "8":
//     console.log("Tu nota es notable, buen trabajo!");
//     break;
//   case "9":
//   case "10":
//     console.log("Enhorabuena! Tienes nota sobresaliente!");
//     break;
//   default:
//     "Esto no cuenta como nota! Por favor, intenta de nuevo!";
//     break;
// }

// var dia = prompt("Dime el día");

// switch(dia){
//     case "Sabado":
//     case "Domingo":
//         console.log("Es fin de semana para el profesor");
//     break;

//     default:
//         console.log("Te esperamos en Las Naves");
// }

////////////////////////////////////////
// BUCLE //
////////////////////////////////////////

// let dinero = -5;

// while(dinero > 0){

//     dinero -= 5;
//     console.log(`Pido un bocadillo y una coca-cola y me quedan ${dinero} euros.`);
// };

// do {

//     console.log("has entrado y no cumplías")

// } while(dinero > 0);

// //La diferencia es que do while siempre entra la primera vez aunque no cumpla la condición.

//FOR

// for(let contador = 1; contador <= 10; contador++){
//     console.log(contador)
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 20; i >= 0; i--){
//     i % 2 !== 0
//         ? console.log(`impar ${i}`)
//         : null
// }


let numero = prompt("Dime un número del 1 al 10");

for(let i = 0; i < 10; i++){

    console.log(`${numero} X ${i + 1} = ${numero * (i + 1)}`)

}