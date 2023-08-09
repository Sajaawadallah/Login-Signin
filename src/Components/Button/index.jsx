import React from 'react'
import './style.css'

const Button = ({ type, name }) => {

    return (
        <button type={type} name={name}>{name}</button>
    )
}


export default Button