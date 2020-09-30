import React, { Component, Fragment } from "react";

class Tag extends Component {
    render() {
        return(
            <Fragment>
                <li className={this.props.css}>{this.props.label}</li>
            </Fragment>
        )
    }
}

export default Tag;