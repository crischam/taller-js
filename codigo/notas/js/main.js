const note1 = document.getElementById("nota1");
const note2 = document.getElementById("nota2");
const note3 = document.getElementById("nota3");
const respuesta = document.getElementById("result");
const promedio = document.getElementById("promedio");

function main(){

   console.log("probando funcion")

	const n1 = parseInt(note1.value);
  const n2 = parseInt(note2.value);
	const n3 = parseInt(note3.value);

if(!n1 || !n2 || !n3){
validation(n1,n2,n3);
}else{
media(n1,n2,n3);
	}
}

function media(n1,n2,n3){
 const promedi0 = (n1+n2+n3)/3
 
   promedio.innerHTML = promedi0;
   res(promedi0);
}

function res(pro){
    respuesta.classList.remove("text-danger");
    respuesta.classList.add("text-success");
if (pro < 70 ){      respuesta.classList.add("text-danger");

   respuesta.innerHTML = "Amigo!, no pasaste la materia";
} 
else {
   respuesta.innerHTML = "Amigo!, pasas la materia";
	}
}

function validation(n1,n2,n3){
      respuesta.classList.add("text-danger");
if(!n1){
   respuesta.innerHTML = "falta la primera nota";

}else if(!n2){
   respuesta.innerHTML = "flata la segunda nota";

}else if (!n3){
   respuesta.innerHTML = "falta la tercera nota";
	}

}