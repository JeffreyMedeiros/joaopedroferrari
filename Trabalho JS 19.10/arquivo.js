 function calcularIMC() {

     var dados = new Dados();
      dados.setNome();
      dados.setPeso();
      dados.setAltura();
             
    var altura = dados.getAltura();
    var peso = dados.getPeso();
    var IMC = (peso/Math.pow(altura,2));
    console.log(IMC);

    var tr = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdImc = document.createElement("td");

    tr.appendChild(tdNome);
    tr.appendChild(tdPeso);
    tr.appendChild(tdAltura);
    tr.appendChild(tdImc);

    tdNome.innerText = dados.getNome();
    tdPeso.innerText = dados.getPeso();
    tdAltura.innerText = dados.getAltura();
    tdImc.innerText = IMC;
    document.querySelector("tbody").appendChild(tr);
    
 };



  

