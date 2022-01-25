import React from 'react';
import '../scss/Header.css';
import user from '../images/user-netflix.png';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo-netflix" />
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src={user} alt="user" />
                </a>
            </div>
            
        </header>
    )
}