import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeCategorias from './components/ListaDeCategorias'
import "./assets/App.css"
import "./assets/index.css"
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {
    constructor() {
        super();
        this.categorias = new Categorias();
        this.notas = new ArrayDeNotas();
    }

    render() {
        return(
            <section className='conteudo'>
                <FormularioCadastro
                    categorias={this.categorias.categorias}
                    criarNota={this.notas.criarNota} 
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        adicionarCategoriaNew={this.categorias.adicionarCategoriaFuncao}
                        categorias={this.categorias.categorias}
                    />
                    <ListaNotas
                        apagarNota={this.notas.deletarNota}
                        notas={this.notas.notas} />
                </main>

            </section>
        );
    }
}

export default App;