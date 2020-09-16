import React, { Component } from "react";

class Tag extends Component {
    render() {
        console.log(this.props)
        return(
            <>
                <li className={this.props.css}>{this.props.label}</li>
            </>
        );
    }
}

export default Tag;