import React from 'react'

function GameSLider({ src, dir, title, imgdir }) {
    return (
        <div className='game-slide'>
            <img src={src} />
            <div className='game-slide-info-title'>
                <h3 className={dir} >{title}</h3>
            </div>
            <div className={`game-slide-img ${imgdir}`}>
                <img src={src} />
            </div>



        </div>
    )
}

export default GameSLider
