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

    render() {
        return(
            <section className='conteudo'>
                <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                <ListaNotas notas={this.state.notas} />
            </section>
        );
    }
}

export default App;