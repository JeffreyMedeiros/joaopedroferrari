var Dados = (function () {

var dado = function(){
this.nome = "";
this.peso = 0;
this.altura = 0;
}
  dado.prototype.setNome = function(){
      this.nome = document.querySelector("#inputNome").value;
  } 
  dado.prototype.getNome = function(){
      return this.nome;
  }  
  dado.prototype.setPeso = function(){
    this.peso = parseFloat(document.querySelector('#peso').value);
} 
 dado.prototype.getPeso = function(){
    return this.peso;   
}
dado.prototype.setAltura = function(){
    this.altura = parseFloat(document.querySelector('#altura').value);
}
dado.prototype.getAltura = function(){
    return this.altura;
}
return dado;
})();