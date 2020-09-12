import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro'
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
    constructor() {
        super();

        this.state = {
            notas:[]
        }
    }

    criarNota(titulo, telefone, texto) {
        const novaNota = {titulo, telefone, texto};
        const novoArrayDeNotas = [...this.state.notas, novaNota]
        console.log(novoArrayDeNotas)
        const novoEstados = {
            notas:novoArrayDeNotas
        }
        this.setState(novoEstados)
    }

    deletarNota(indice) {
        let ArrayDeNotas = this.state.notas;
        ArrayDeNotas.splice(indice, 1);
        this.setState({nota:ArrayDeNotas})
    }

    render() {
        return(
            <section className='conteudo'>
                <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                <ListaNotas
                    apagarNota={this.deletarNota.bind(this)}
                    notas={this.state.notas} />
            </section>
        );
    }
}

export default App;