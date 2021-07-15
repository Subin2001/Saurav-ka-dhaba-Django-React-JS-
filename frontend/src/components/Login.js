import React from 'react'
import '../styles/login.css'

function Login() {
    return (
        <div className="login-container">
            <div className="left-section">
                <img src="./images/pizaBoy.png" alt="pizaboy" className="boy" />
            </div>
            <div className="right-section">
                <div className="container">
                    <h1>Login to Saurav Ka Dhaba</h1>
                    <div className="box">
                        <input type="text" placeholder='UserName or Email ID'/>
                    </div>
                    <div className="box">
                    <input type="password" name="password" id="password" placeholder='Password' />
                    </div>
                    <div className="submit-btn">Login Now</div>
                </div>
            </div>
        </div>
    )
}

export default Login
