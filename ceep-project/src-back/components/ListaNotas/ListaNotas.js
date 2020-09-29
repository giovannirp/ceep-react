import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./listaNotas.css"

class ListaNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                index={index} 
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo} 
                                telefone={nota.telefone} 
                                texto={nota.texto}
                                categoria={nota.categoria}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaNotas;