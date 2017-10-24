// ts-check
var Candidato = require('./candidato');
var Eleicao = require('./eleicao');

var numeroMaximoVotantes = 30;
var eleicao = new Eleicao();

var candidatoLula = new Candidato();
candidatoLula.setNome("Lula");
candidatoLula.setCodigo(13);
candidatoLula.setNomePartido("PT");

var candidatoBolsonaro = new Candidato();
candidatoBolsonaro.setNome("Bolsonaro");
candidatoBolsonaro.setCodigo(20);
candidatoBolsonaro.setNomePartido("PSC");

for (var voto = 0; voto < numeroMaximoVotantes; voto++) {

    var valorAleatorio = Math.random(1, 50);
    console.log(valorAleatorio)
    if (valorAleatorio > 0.25) {

        var quantidadeDeVotosAtual = candidatoBolsonaro.getQuantidadeDeVotos();
        candidatoBolsonaro.setQuantidadeDeVotos(quantidadeDeVotosAtual + 1);
    } else {
        var quantidadeDeVotosAtual = candidatoLula.getQuantidadeDeVotos();
        candidatoLula.setQuantidadeDeVotos(quantidadeDeVotosAtual + 1);
    }

}
//versao set
var listaCandidatos = [];
listaCandidatos.push(candidatoLula);
listaCandidatos.push(candidatoBolsonaro);
eleicao.setCandidatos(listaCandidatos);

//versao adiciona
// eleicao.adicionaCandidato(candidatoBolsonaro);
// eleicao.adicionaCandidato(candidatoLula);


eleicao.setAno(2017);


console.log("Qtd votos " + candidatoBolsonaro.getNome() + " " + candidatoBolsonaro.getQuantidadeDeVotos());
console.log("Qtd votos " + candidatoLula.getNome() + " " + candidatoLula.getQuantidadeDeVotos());