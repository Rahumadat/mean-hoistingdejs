// DETERMINADO
// console.log(example);
// ejemplo de var = "I'm the example!";
// DESPUÉS DE QUE SEA ELEVADO POR EL INTÉRPRETE
// var example;
// console.log(example); // registros indefinidos
// example = "I'm the example!";
//
// console.log(example);
// let example = "I'm the example!";    
// /////////////////////////////
// /////////////////////////////
// //CODIGO 1///////////////////

// console.log(hello);                                   
// var hello = 'world';        // aparece como undefined

// codigo modificado// defino primero la variable LET y luego imprimo en consola

// let hello = 'world';
// console.log(hello);                                   
        
// /////////////////////////////
// /////////////////////////////
// //CODIGO 2//////////////////

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle); 
// }

// codigo modificado//defino como LET la variable dentro de la funcion y ademas modifico el llamado de la funcion para despues de la definicion

// var needle = 'haystack';
// function test(){
// 	let needle = 'magnet';
// 	console.log(needle);
// }
// test();

// /////////////////////////////
// /////////////////////////////
// ////CODIGO 3//////////////////

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// codigo modificado //se agrega el llamado a la funcion y se agrega el LET en ella

// var brendan = 'super cool';
// function print(){
//     let brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
// print();

// /////////////////////////////
// /////////////////////////////
// ////CODIGO 4//////////////////

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// codigo modificado // se cambia el VAR por LET en la funcion Y se reestructura

// let food = 'chicken';
// console.log(food);
// function eat(){
// 	var food = 'half-chicken';
// 	console.log(food);
// 	food = 'gone';
// }
// eat();
// console.log(food);

// /////////////////////////////
// /////////////////////////////
// ////CODIGO 5//////////////////

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// codigo modificado// se declara variable fuera de la funcion y se reestructura


// var food = ""
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// mean();
// console.log(food);

// /////////////////////////////
// /////////////////////////////
// ////CODIGO 6//////////////////
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// codigo modificado// se sube la definicion de la variable para que no salga indefinida

// var genre = "disco";
// console.log(genre);
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// /////////////////////////////
// /////////////////////////////
// ////CODIGO 7//////////////////
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// codigo modificado// se mueve el llamado de la funcion al final

// dojo = "san jose";
// console.log(dojo);
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// learn();
// console.log(dojo);

// /////////////////////////////
// /////////////////////////////
// ////CODIGO 8//////////////////
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

// codigo modificado//

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }


