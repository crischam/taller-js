const numero = document.getElementById("numero");
const resultado = document.getElementById("result");
	

function calculate(){

let n =  parseInt(numero.value)
let total = 1; 
  
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	resultado.innerHTML = `El factorial es ${total}`;
}