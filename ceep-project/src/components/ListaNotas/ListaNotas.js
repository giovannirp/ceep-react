import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./listaNotas.css"

class ListaNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaNotas;