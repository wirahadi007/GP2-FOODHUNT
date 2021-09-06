import React from 'react'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [credential, setCredential] = React.useState({});

    const loginHandler = e => {
        const {value, name} = e.target;
        setCredential({
            ...credential,
            [name] : value
        });
    }

    const submitHandler = e => {
        e.preventDefault();

        if (
            credential.username === 'admin' &&
            credential.password === 'admin123'
        ) {
            dispatch({type: 'LOGIN'});
            localStorage.setItem('authenticated', true);
        } else {
            alert('Login gagal');
        }

        if (localStorage.getItem('authenticated')) {
            // history.push('/admin');
            window.location.href = '/admin'
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={loginHandler} name="username" type="text" placeholder="Username"/>
            <input onChange={loginHandler} name="password" type="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;