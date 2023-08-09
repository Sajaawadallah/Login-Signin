import React from 'react'
import './style.css'


const Image = ({ src, alt }) => {

    return (

        <img src={src} alt={alt} className='img-fluid' />

    )

}

export default Image