import React from 'react';
import './main-phone.scss'

const MainPhone = () => {

  return (
    <div className='main-phone'>

      <a href='tel: +79098889999' className='main-phone__number'>
        <i className='main-phone__icon' />
        8-909-888-99-99
      </a>
    </div>
  )
};

export default MainPhone;