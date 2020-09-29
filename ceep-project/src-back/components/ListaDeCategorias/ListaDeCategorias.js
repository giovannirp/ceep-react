import React, { Component } from 'react';
import Tag from '../Tag/Tag';
import "./estilos.css";

class ListaDeCategorias extends Component {
    state = {  }
    _handleEventInput(e) {
        if(e.key == "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoriaNew(valorCategoria);
        }
    }
    
    render() { 
        return ( 
            <section className="lista-categorias">
                <ul className="lista_categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <Tag label={categoria} key={index} css="lista-categorias_item" />
                    })} 
                </ul>
                <input 
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventInput.bind(this)}
                />
            </section>
         );
    }
}
 
export default ListaDeCategorias;