import React from 'react'
import './style.css'


const SoiclLink = ({ iconcode, iconlink }) => {
    return (
        <a href={iconlink} className='icon-box' dangerouslySetInnerHTML={{ __html: iconcode }} />
    )
}

export default SoiclLink
