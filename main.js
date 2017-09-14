var Candidato = require('./candidato');
var Eleicao = require('./eleicao');

var candBolsomito = new Candidato();

candBolsomito.setNome('Bolsomito');
candBolsomito.setCodigo(1);
candBolsomito.setNomePartido("Partido corações");

var candTemer = new Candidato();

candTemer.setNome('Temer');
candTemer.setCodigo(2);
candTemer.setNomePartido("Partido fora");

var eleicao = [];
eleicao.setAno(2018);
eleicao.setCandidato(candBolsomito);
eleicao.setCandidato(candTemer);

for (var i = 0; i < 30; i++) {
  if (i % 2 == 0) {
    eleicao.getCandBolsomito.adicionarVotos(1);
  } else {
    eleicao.getCandTemer.adicionarVotos(1);
 }

}
console.log(candBolsomito.getNome() +" "+ candBolsomito.getQuantidadeDeVotos);
console.log(candTemer.getNome()+" "+ candTemer.getQuantidadeDeVotos);