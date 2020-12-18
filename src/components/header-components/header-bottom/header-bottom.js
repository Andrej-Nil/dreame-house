import React from 'react';
import HeaderContacts from '../header-contacts';
import HeaderBanner from '../header-banner';
import './header-bottom.scss';

const HeaderBottom = () => {

  return (
    <div className='header__bottom container'>
      <HeaderContacts />
      <HeaderBanner />
    </div>
  )
};

export default HeaderBottom;