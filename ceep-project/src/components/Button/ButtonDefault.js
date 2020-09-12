import React, { Component } from "react";

class ButtonDefault extends Component {
    render() {
        console.log(this.props)
        return(
            <button className={this.props.css}>{this.props.label}</button>
        );
    }
}

export default ButtonDefault;