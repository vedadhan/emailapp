import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider).
        then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <h1> Login Page </h1>
            <div className='loginContainer'>
                <img src="https://www.caroli.org/wp-content/uploads/2019/04/email-logo.png" alt="" />
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login;
