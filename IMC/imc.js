


function calcular_imc(){
var altura = document.imc.altura.value;
var peso = document.imc.peso.value;

var imc = peso / (altura * altura);

if(imc <18.5){
alert("Você está magro com esse indice: " + imc);
}
else if(imc>=18.5 && imc<24.9){
alert("Você está normal com esse indice: " + imc);
}
else if(imc>=25 && imc<29.9) {
alert("Você está com sobre peso com esse indice: " + imc);
}
else if(imc>=30 && imc<39.9) {
alert("Você está com obesidade com esse indice: " + imc);
}
else if (imc>40)
alert("Você está com obesidade grave com esse indice: " + imc);
}
