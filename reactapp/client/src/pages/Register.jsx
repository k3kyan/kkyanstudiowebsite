import React from 'react'
import './Register.css'
import FormSection from './FormSection'

export default function RegisterPage(){
    const userArr = ['regUser', 'Username', 'text', 'account', '/^[a-zA-Z0-9]+$/', 'Username']
    const passArr = ['regPass', 'Password', 'password', 'account', '/.*/', 'Password']
    const emailArr = ['regEmail', 'Email', 'text', 'account', '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', 'Email']
    const elementList = [userArr, passArr, emailArr]
    return(
        <div>
            <div>
                <h1>Hi there!</h1>
                <span>Please fill out your login information.</span>
            </div>
            <form>
                {FormSection('tmpDiv', elementList)}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}