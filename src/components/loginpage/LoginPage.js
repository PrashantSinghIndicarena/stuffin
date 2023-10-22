import React from 'react';
import './LoginPage.css';
import heroImg from '../../assets/Rectangle-4.svg'

export default function LoginPage() {
    return (
        <div id='landing-login-page'>
            <div id="login-left">right</div>
            <div id="logic-box" >
                <p id="logic-box-heading" >Log in</p>
                <input id='placeholder'
                type="text" placeholder="Email ID or Phone"></input>
                <input type="password" placeholder='Password' />
                <div id='checkbox'>
                    <input type="checkbox"></input>
                    <p>Remember me</p>
                 </div>
                 <button>Log in</button>
                 <p>Don't have an acount?<span>Sign up</span></p>
                
            </div>
        </div>
    )
}
