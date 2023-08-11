import React from 'react'
import { Navigate } from 'react-router-dom';
import { ROLES } from '../../constent/roles'
import { PATHS } from '../../router/paths';

const Gured = ({ children }) => {
    const savedRole = localStorage.getItem('role');


    if (savedRole === ROLES.ADMIN || savedRole === ROLES.USER) {
        return children;
    }




    return <Navigate to={PATHS.LOGIN} replace={true} />;




};

export default Gured