const number1 = document.getElementById("numero1");
const number2 = document.getElementById("numero2");
const number3 = document.getElementById("numero3");
const resultado = document.getElementById("result");

function calculate(){
const n1 = parseInt(number1.value);
const n2 = parseInt(number2.value);
const n3 = parseInt(number3.value);

if (!n1 || !n2 || !n3){
validation(n1,n2,n3);
}
else {
Nmayor(n1,n2,n3);
}
}

function validation(n1,n2,n3){

resultado.classList.add("text-danger");

if (!n1){

resultado.innerHTML = "ingrese un valor en el primer campo "

}else if (!n2){

resultado.innerHTML = "ingrese un valor en el segundo campo "
}
else if (!n3){
resultado.innerHTML = "ingrese un valor en el tercer campo "
}
}

 function Nmayor(n1,n2,n3){
 
 resultado.classList.remove("text-danger");

 let mayor = 0;
 
 if (n1 > n2 && n1 > n3){
 mayor = n1
 }else if (n2> n1 && n2 > n3){
 mayor = n2
 }else if (n3> n1 && n3 > n2){
 mayor = n3
 } 
 resultado.innerHTML = `El numero mayor es: ${mayor}`;
 resultado.classList.add("text-success");

 }
 