import React from 'react';
import HeaderCallback from '../header-callback';
import HeaderLogo from '../header-logo';
import HeaderNav from '../header-nav';
import HeaderPhone from '../header-phone';
import './header-top.scss'

const HeaderTop = () => {

  return (
    <div className='header__top'>
      <HeaderLogo />
      <HeaderNav />
      <HeaderCallback />
      <HeaderPhone />
    </div>
  )
};

export default HeaderTop;