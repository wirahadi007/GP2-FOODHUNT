import React from 'react';
import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = props => {
    const auth = localStorage.getItem('authenticated')
    console.log(auth);
    return (
        auth ? <Route {...props} /> : <Redirect to='/' />
    )
}

export default PrivateRoute;