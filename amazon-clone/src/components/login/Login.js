 import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(authUser => {
                console.log(authUser);
                history.push('/');
            }).catch(error => alert(error.message))
    }

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then(authUser => {

                // it successfully created a new user with email and password
                if (authUser) {
                    console.log(authUser);
                    history.push('/')
                }
            }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />

                    <button type="submit" onClick={signIn} className='login__signinbutton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON ReactJS clone Application Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerbutton">Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;