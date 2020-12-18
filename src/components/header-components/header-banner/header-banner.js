import React from 'react';
import './header-banner.scss';

const HeaderBanner = () => {

  return (
    <div className="header__banner ">
      <div className="header__banner-inner">
        <h3 className="header__banner-title">Наши сотрудники</h3>
        <div className="header__banner-content">
          <div className='employee-card'>
            <img className="employee-card__photo" src='./image/photo/designer.jpg' alt="" />
            <div className="employee-card__content">
              <p className="employee-card__name">
                МАРИЯ<br />
                ДОБРЫНИНА
              </p>
              <p className="employee-card__position">дизайнер</p>
              <p className="employee-card__quote">Наши дни это самое лучшее время для дизайнера . Сочетание современых технологий и матерьялов позволяют воплатить поистене неверояные идеи!</p>
              {/*<span className="employee-card__autograph "></span>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeaderBanner;