import React, { Component } from 'react';
import "./estilos.css";

class ListaDeCategorias extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="lista-categorias">
                <ul className="lista_categorias_lista">
                    <li className="lista-categorias_item">Categoria</li>
                </ul>
                <input 
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                />
            </section>
         );
    }
}
 
export default ListaDeCategorias;