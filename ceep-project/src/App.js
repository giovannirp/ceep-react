import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeCategorias from './components/ListaDeCategorias'
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
    constructor() {
        super();

        this.state = {
            notas:[],
            categorias:["Games", "Alimentação"]
        }
    }

    criarNota(titulo, telefone, texto, categoria) {
        const novaNota = {titulo, telefone, texto, categoria};
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

    adicionarCategoriaFuncao(nomeCategoria) {
        const novoArrayCategoria = [...this.state.categorias, nomeCategoria]
        const novoEstados = {...this.state, categorias:novoArrayCategoria}
        this.setState(novoEstados)
    }

    render() {
        return(
            <section className='conteudo'>
                <FormularioCadastro
                    categorias={this.state.categorias}
                    criarNota={this.criarNota.bind(this)} 
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        categorias={this.state.categorias}
                        adicionarCategoriaNew={this.adicionarCategoriaFuncao.bind(this)}
                    />
                    <ListaNotas
                        apagarNota={this.deletarNota.bind(this)}
                        notas={this.state.notas} />
                </main>

            </section>
        );
    }
}

export default App;