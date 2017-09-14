module.exports = (function(){

var eleicao = function() { 
    this.ano;
    this.candidatos= [];
}

eleicao.prototype.setAno = function (novoAno) {
    this.ano = novoAno;
}

eleicao.prototype.getAno = function () {
    return this.ano;
}

eleicao.prototype.setCandidato = function (candidato) {
    this.candidato.push(candidato);
}

eleicao.prototype.getCandidato = function () {
    return this.candidato;
}
}) ();