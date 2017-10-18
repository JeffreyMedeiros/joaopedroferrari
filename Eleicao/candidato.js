// ts-check
module.exports = (function() {

    var candidato = function() {
        this.nome = "";
        this.codigo = 0;
        this.nomePartido = "";
        this.quantidadeDeVotos = 0;
    }

    candidato.prototype.setNome = function(novoNome) {
        this.nome = novoNome;
    }

    candidato.prototype.getNome = function() {
        return this.nome;
    }

    candidato.prototype.setCodigo = function(novoCodigo) {
        this.codigo = novoCodigo;
    }

    candidato.prototype.getCodigo = function() {
        return this.codigo;
    }

    candidato.prototype.setNomePartido = function(novoNomePartido) {
        this.nomePartido = novoNomePartido;
    }

    candidato.prototype.getNomePartido = function() {
        return this.nomePartido;
    }

    candidato.prototype.setQuantidadeDeVotos = function(novaQuantidade) {
        this.quantidadeDeVotos = novaQuantidade;
    }

    candidato.prototype.getQuantidadeDeVotos = function() {
        return this.quantidadeDeVotos;
    }

    return candidato;

})();