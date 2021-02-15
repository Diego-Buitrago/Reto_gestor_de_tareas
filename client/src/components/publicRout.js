import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {_tareas} from '../config/path';
import useAuthContext from '../hooks/useContext'

const PublicRoute = (props) =>{
    const {isAutenticated} = useAuthContext();

    if (isAutenticated) {
        return <Redirect to={_tareas}/>
    }

    return <Route {...props} />
}

export default PublicRoute