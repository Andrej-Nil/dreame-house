import React from 'react';
import { DummyService } from '../../../services';
import './header-bg.scss'

const service = new DummyService();

const HeaderBg = () => {

  const { headerBg } = service

  return (
    <img className='header-bg' src={headerBg} alt='' />
  )
};

export default HeaderBg;