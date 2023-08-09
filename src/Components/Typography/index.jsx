import React from 'react'
import './style.css'

const Typography = ({ variant, children }) => {
    switch (variant) {
        case 'h1':
            return <h1 className='t__h1'>{children}</h1>;
        case 'h2':
            return <h2 className='t__h2'>{children}</h2>;
        case 'h3':
            return <h3 className='t__h3'>{children}</h3>;
        case 'h4':
            return <h4 className='t__h4'>{children}</h4>;
        case 'h5':
            return <h5 className='t__h5'>{children}</h5>;
        case 'h6':
            return <h6 className='t__h6'>{children}</h6>;
        case 'body1':
            return <p className='t__body1'>{children}</p>;
        case 'body2':
            return <p className='t__body1'>{children}</p>;
        case 'span':
            return <span className='t__span'>{children}</span>;
        case 'caption':
            return <span className='t__caption'>{children}</span>;
        default:
            break;
    }
};

export default Typography;