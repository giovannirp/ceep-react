import React, { Component } from 'react'
import "./estilo.css"

class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className='card-nota'>
                <header className='card-nota_cabecalho'>
                    <h1 className='card-nota_titulo'>{this.props.titulo}</h1>
                    <h3 className='card-nota_titulo text-danger'>{this.props.telefone}</h3>
                </header>
                <p className='card-nota_texto'>{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;