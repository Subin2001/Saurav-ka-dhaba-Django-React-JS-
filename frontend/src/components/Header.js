import React from 'react'
import '../styles/header.css'
import Header_banner from './Header_banner'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
            <div className="header-top">
                <div className="left-section">
                    <i class="fas fa-hamburger logo"></i>
                    <div className="title"><Link to='/'>Saurav Ka Dhaba</Link></div>
                </div>
                <div className="right-section">
                    <span>Home</span>
                    <span>About US</span>
                    <span>Offers</span>
                    <span>Contact</span>
                    <div className="search-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div className="usr-icon">
                        <Link to='/login'><i class="far fa-user"></i></Link>
                    </div>
                </div>
            </div>
            <Header_banner />
        </div>
    )
}

export default Header
