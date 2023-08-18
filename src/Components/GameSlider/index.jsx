import React from 'react'
import './style.css'

function GameSLider({ src, src1, src2, dir, title, imgdir, secimgdir }) {
    return (
        <div className='game-slide'>
            <img src={src} />
            <div className={`game-slide-info-title ${dir ? "left-title" : ""}`}>
                <h3 >{title}</h3>
            </div>
            <div className={`game-slide-img ${imgdir ? "right-dir" : ""}`}>
                <img src={src1} />
            </div>
            <div className={`game-slide-img1 ${secimgdir ? "left-dir" : ""}`}>
                <img src={src2} />
            </div>

        </div>
    )
}

export default GameSLider
