import React from 'react'
import './style.css'

const Row = ({ dir, justify, align, children }) => {

    return (
        <div className={`row ${dir} ? ${dir} : " " 
            ${justify} ? ${justify} : " " 
             ${align} ? ${align} : " " `} >
            {children}
        </div>
    )
}




export default Row