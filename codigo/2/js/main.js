
const edad = document.getElementById('Edad');
const message = document.getElementById('result');

function main(edad){

const age =  parseInt(edad.value);

if (!age){
  error();
	}else {
  evaluate(age);
  }
}

function error(){

  message.innerHTML = "Ingrese datos validos";
    message.classList.add("text-danger");
}

function evaluate(edad){

if (edad < 18){
menor(edad);
}
else{ 
mayor(edad);
	}
}

function mayor(edad){
message.classList.remove("text-danger");
message.innerHTML = `Con ${edad} años es MAYOR de edad`;
message.classList.add("text-success");
}

function menor(edad){
message.classList.remove("text-danger");
message.innerHTML = `Con ${edad} años es MENOR de edad`;
message.classList.add("text-info");

}
