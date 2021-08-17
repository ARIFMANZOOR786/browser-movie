import React from 'react';

import { Link } from 'react-router-dom';

import MOVIELogo from '../../images/movie-logo.PNG';

import Logo from '../../images/logo2.PNG';

import { Wrapper, Content, LogoImg, MOVIELogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
            <LogoImg src={MOVIELogo} alt='movie-logo' />
            </Link>
            <MOVIELogoImg src={Logo} alt='logo' />

        </Content>
    </Wrapper>
);


export default Header;