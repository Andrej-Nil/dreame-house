import React from 'react';
import SectionTitle from '../section-title';
import './about-us.scss'

const AboutUs = () => {

  return (
    <div className="about-us">
      <div className="container">
        <SectionTitle />
        <div className='about-us__content'>
          <div className="about-us__text-wrap">
            <p className='about-us__text'>
              Строительство современых домом это сложный, комплексный процесс, в котором принемают участие разного плана специалисты - дизайнеры, инженеры, проектировщики, менеджеры, строители, водители и так далее. Каждый отдел равно как и каждый отдельно взятый сотрудник должены работать как часть единого механизма. С другой стороны строительсво это увлекательный и интересный процесс, дающий возможность развернуться любому мастеру. Мы влюблены в этот процесс и вкладываем в него всю свою душу!
              <span className="about-us__text-dash" />
            </p>

          </div>
          <img className="about-us__img" src='./image/photo/about-us.jpg' alt='' />
        </div>
      </div>
    </div>
  )
};

export default AboutUs;