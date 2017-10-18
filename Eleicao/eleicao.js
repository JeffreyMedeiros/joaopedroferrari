module.exports = (function() {

    var eleicao = function() {
        this.ano = 0;
        this.candidatos = [];
    }

    eleicao.prototype.setAno = function(novoAno) {
        this.ano = novoAno;
    }

    eleicao.prototype.getAno = function() {
        return this.ano;
    }

    eleicao.prototype.setCandidatos = function(novosCandidatos) {
        this.candidatos = novosCandidatos;
    }

    eleicao.prototype.getCandidatos = function() {
        return this.candidatos;
    }

    // outra funçao pulo do gato
    eleicao.prototype.adicionaCandidato = function(novoCandidato) {
        this.candidatos.push(novoCandidato);
    }

    return eleicao;

})();