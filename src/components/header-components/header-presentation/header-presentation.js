import React from 'react';
import './header-presentation.scss'

const HeaderPresentation = () => {

  return (
    <div className='container _absolute'>
      <div className='presentation'>
        <div className="presentation__content">
          <h1 className='presentation__title'>
            Modern House -
        </h1>
          <p className='presentation__slogan'>
            мы знаем все о том как построить дом вашей мечты!
        </p>
          <p className='presentation__text'>
            Уже более 10 лет мы строим дома в современном дизайне! Огромный опыт наших специалистов позволяет реализовать самые сложные задачи, о чем свидетельствует десятки успешно реализованных проектов, а значит десятки счастливых семей!
        </p>
        </div>
        <div className='presentation__buttons'>
          <span className="presentation__btn button">заказать проект</span>
          <span className="presentation__btn button button-white">задать вопрос</span>
        </div>
      </div>

    </div>
  )
};

export default HeaderPresentation;