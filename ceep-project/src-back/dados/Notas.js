export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
    }

    criarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota)
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1);
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}