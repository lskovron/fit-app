import React from 'react';

import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <div id="header">
            <img id="logo" src={Logo} alt="FIT Logo" />
        </div>
    );
}

export default Header;