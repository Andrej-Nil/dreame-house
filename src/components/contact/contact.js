import React from 'react';
import './contact.scss'

const Contact = () => {

  return (
    <div className='contact'>
      <i className='contact__icon contact__icon_mail' />
      <h4 className="contact__title">Быстрая связь</h4>
      <p className='contact__item'> Почта: modernhouse@yndex.com</p>
      <p className='contact__item'>Тел: 8-909-888-99-99</p>
    </div>
  )
};

export default Contact;