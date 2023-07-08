import React, { Component } from 'react'
import './style.css'

class index extends Component {
    render() {
        return (
            <div className={`row ${this.props.dir} ? ${this.props.dir} : " " 
            ${this.props.justify} ? ${this.props.justify} : " " 
             ${this.props.align} ? ${this.props.align} : " " `} >
                {this.props.children}
            </div>
        )
    }
}



export default index