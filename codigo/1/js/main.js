const inputNumberOne = document.getElementById("numberOne");
const inputNumberTwo = document.getElementById("numberTwo");
const h5Result = document.getElementById("result");

function calculate() {
	const n1 = parseInt(inputNumberOne.value);
  const n2 = parseInt(inputNumberTwo.value);
  
  
  if(hasDataAnError(n1, n2)){
		onError();
    return;
  }
	onSuccess(n1, n2);
  
}

function hasDataAnError(n1, n2){
	return !n1 || !n2;
}

function onError(){
    h5Result.innerHTML = "ingrese datos validos";
    h5Result.classList.add("text-danger");
}

function onSuccess(n1, n2){
  	h5Result.innerHTML = add(n1, n2);
    h5Result.classList.remove("text-danger");
}

function add(n1,n2){
  return n1+n2; 
}