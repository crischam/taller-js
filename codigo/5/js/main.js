const par = document.getElementById("number");
const resultado= document.getElementById("result");

function show(){
const n = parseInt(par.value);
if(!n){
result.innerHTML = `ingrese un dato valido`;
}else{
operation(n);
}
}

function operation(n){
if (n % 2 ){
incorrect(n)
}else{
correct(n);
}
}

function correct(n){
    result.innerHTML = `El numero ${n} es par`;
}
function incorrect(n){
    result.innerHTML = `El numero ${n} no es par`;
}