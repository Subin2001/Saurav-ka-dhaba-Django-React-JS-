import React from 'react'
import '../styles/register.css'
import {Link } from 'react-router-dom'

function Register() {
    return (
        <div className="register-container">
            <div className="left-section">
                <img src="./images/pizaBoy.png" alt="pizaboy" className="boy" />
            </div>
            <div className="right-section">
                <div className="container">
                    <h1>Register to Saurav Ka Dhaba</h1>
                    <div className="box">
                        <input type="text" placeholder='UserName or Email ID'/>
                    </div>
                    <div className="box">
                    <input type="password" name="password1" id="password1" placeholder='New Password' />
                    </div>
                    <div className="box">
                    <input type="password" name="password2" id="password2" placeholder='New Password' />
                    </div>
                    <div className="submit-btn">Register Now</div>
                    <div className="login">Already, have an Account.? <Link to='/login'>Login Now</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Register
