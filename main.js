var Candidato = require('./candidato');
var Eleicao = require('./eleicao');

var candBolsomito = new Candidato();

candBolsomito.setNome('Bolsomito');
candBolsomito.setCodigo(1);
candBolsomito.setNomePartdo("Partido corações");

var candTemer = new Candidato();

candTemer.setNome('Temer');
candTemer.setCodigo(2);
candTemer.setNomePartdo("Partido fora");

var eleicao = new Eleicao();
eleicao.setAno(2018);
eleicao.addCandidatos(cand1);
eleicao.addCandidatos(cand2);

for (var i = 0; i < 30; i++) {
  if (i % 3 == 0) {
    eleicao.getCandidatos()[1].adicionarVotos();
  } else {
    eleicao.getCandidatos()[0].adicionarVotos();
  }
}
console.log(eleicao.getCandidatos()[1].getNome() + ": " + eleicao.getCandidatos()[1].getQuantidadeDeVotos());
console.log(eleicao.getCandidatos()[0].getNome() + ": " + eleicao.getCandidatos()[0].getQuantidadeDeVotos());