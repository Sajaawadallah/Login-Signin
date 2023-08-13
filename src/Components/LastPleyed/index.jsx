import React from 'react'
import './style.css'
const LastPlayed = ({ title, src }) => {
    return (
        <div>
            <div className='last-played-card'>
                <div className='card-img'>
                    <img src={src} />
                </div>
                <p className='card-title'>{title}</p>



            </div>

        </div>
    )
}

export default LastPlayed
