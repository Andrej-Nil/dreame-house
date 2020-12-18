import React from 'react';
import HeaderBg from '../header-bg';
import HeaderBottom from '../header-bottom';
import HeaderSlogan from '../header-presentation';
import HeaderTop from '../header-top';

import './header.scss';

const Header = () => {

  return (
    <div className='header'>
      <div className='header__content'>
        <HeaderBg />
        <HeaderTop />
        <HeaderSlogan />
      </div>
      <HeaderBottom />
    </div>
  )
};

export default Header;