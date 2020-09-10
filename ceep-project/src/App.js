import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro'
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
    render() {
        return(
            <section className='conteudo'>
                <FormularioCadastro />
                <ListaNotas />
            </section>
        );
    }
}

export default App;