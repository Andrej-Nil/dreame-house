import React from 'react';
import HeaderBg from '../header-bg';
import HeaderTop from '../header-top';

import './header.scss';

const Header = () => {

  return (
    <div className='header'>

      <HeaderTop />
      <HeaderBg />
    </div>
  )
};

export default Header;