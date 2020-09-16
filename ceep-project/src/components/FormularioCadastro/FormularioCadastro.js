import React, { Component } from "react";
import ButtonDefault  from "../Button/ButtonDefault"
import "./formulario.css"

class FormularioCadastro extends Component {
    constructor(props) {
        super();
        this.state = {
            titulo: ''
        }
        this.titulo = "";
        this.texto = "";
        this.telefone = "";
    }

    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudaTelefone(evento) {
        evento.stopPropagation();
        this.telefone = evento.target.value;
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.telefone, this.texto);
    }

    render() {
        return (
            <form className='form-cadastro'
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    id="inputTitulo"
                    placeholder="Titulo"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <input 
                    type="text"
                    placeholder="Telefone"
                    className="form-cadastro_input"
                    onChange={this._handleMudaTelefone.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <ButtonDefault label="Criar nota Nova" css="form-cadastro_input form-cadastro_submit" />
            </form>
        )
    }
}

export default FormularioCadastro;