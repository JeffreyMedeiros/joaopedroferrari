module.exports = (function(){
    
    var candidato = function() {
        this.nome;
        this.codigo;
        this.partido;
        this.Votos = 0;
    }

    candidato.prototype.setCandidato = function (novoNome) {
        this.nome = novoNome;
    }

    candidato.prototype.getCandidato = function () {
        return this.nome;
    }
    
    candidato.prototype.setCodigo = function (novoCodigo) {
        this.codigo = novoCodigo;
    }

    candidato.prototype.getCodigo = function () {
        return this.codigo;
    }

    candidato.prototype.setPartido = function (novoPartido) {
        this.partido = novoPartido;
    }

    candidato.prototype.getPartido = function () {
        return this.partido;
    }

    candidato.prototype.setVotos = function (novoVoto) {
        this.votos = novoVoto;
    }

    candidato.prototype.getVotos = function () {
        return this.votos;
    }

    return candidato;
}) ();