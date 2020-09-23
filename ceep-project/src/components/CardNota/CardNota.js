import React, { Component } from 'react'
import "./estilo.css"
import { ReactComponent as DeleteSvg } from "../../assets/delete.svg";

class CardNota extends Component {
    state = {}
    apagar() {
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render() {
        return (
            <section className='card-nota'>
                <header className='card-nota_cabecalho'>
                    <h1 className='card-nota_titulo'>{this.props.titulo}</h1>
                    <h3 className='card-nota_titulo'>{this.props.telefone}</h3>
                    <DeleteSvg onClick={this.apagar.bind(this)} />
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className='card-nota_texto'>{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;