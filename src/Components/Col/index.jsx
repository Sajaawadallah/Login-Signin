import React, { Component } from 'react'
import './style.css'

class index extends Component {
    render() {
        return (
            <div className={` col-${this.props.col_num}  `}>{this.props.children}</div>
        )
    }
}

export default index