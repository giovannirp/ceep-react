import React, { Component } from 'react'
import "./estilo.css"

class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className='card-nota'>
                <header className='card-nota_cabecalho'>
                    <h1 className='card-nota_titulo'>Titulo</h1>
                </header>
                <p className='card-nota_texto'>Escreva sua nota</p>
            </section>
        );
    }
}

export default CardNota;