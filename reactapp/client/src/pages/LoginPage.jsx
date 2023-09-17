import './LoginPage.css';
import React from 'react';
import FormSection from './FormSection';
//initially centered button
//toggles between being centered and shifting text to the left with an input box on the right

export default function LoginPage(){
    const userArr = ['logUser', 'Username', 'text', 'account', '/^[a-zA-Z0-9]+$/', 'Username']
    const passArr = ['logPass', 'Password', 'password', 'account', '/.*/', 'Password']
    const elementList = [userArr, passArr]
    return(
        <div>
            <div>
                <h1>Hi there!</h1>
                <span>Sign in to your account or <a href='http://localhost:4173/register'>make an account.</a></span>
            </div>
            <form>
                {FormSection('tmpDiv', elementList)}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}