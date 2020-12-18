import React from 'react';
import Contact from '../../contact';
import './header-contacts.scss'

const HeaderContacts = () => {

  return (
    <ul className='header__contacts'>
      <li className="header__contacts-item">
        <Contact />
      </li>
      <li className="header__contacts-item">
        <Contact />
      </li>
    </ul>
  )
};

export default HeaderContacts;