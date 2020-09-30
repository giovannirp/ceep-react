import React, { Component, Fragment } from "react";

class ButtonDefault extends Component {
    render() {
        return(
            <Fragment>
                <button className={this.props.css}>{this.props.label}</button>
            </Fragment>
        )
    }
}

export default ButtonDefault;