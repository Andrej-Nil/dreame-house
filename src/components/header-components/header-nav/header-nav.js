import React from 'react';

import './header-nav.scss'

const HeaderNav = () => {
  return (
    <ul className='header__nav header-nav'>

      <li className='header-nav__item'>
        <a href='#!' className='header-nav__link'>
          О Нас
        </a>
      </li>

      <li className='header-nav__item'>
        <a href='#!' className='header-nav__link'>
          Услуги
        </a>
      </li>

      <li className='header-nav__item'>
        <a href='#!' className='header-nav__link'>
          Проекты
        </a>
      </li>

      <li className='header-nav__item'>
        <a href='#!' className='header-nav__link'>
          Контакты
        </a>
      </li>


    </ul>
  )
}

export default HeaderNav;

