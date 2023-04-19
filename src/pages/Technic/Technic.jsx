import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Technic.module.scss';
import img1 from '../../assets/technic/img-1.png';
import img2 from '../../assets/technic/img-2.png';
import img3 from '../../assets/technic/img-3.png';
import img4 from '../../assets/technic/img-4.png';
import img5 from '../../assets/technic/img-5.png';
import img6 from '../../assets/technic/img-6.png';
import img7 from '../../assets/technic/img-7.png';
import img8 from '../../assets/technic/img-8.png';
import img9 from '../../assets/technic/img-9.png';

const cars = ['Автокраны', 'Автовышки', 'Манипуляторы', 'Бортовые грузовые авто', 'Самосвалы', 'Фронтальные погрузчики', 'Экскаваторы-погрузчики', 'Экскаваторы', 'Ямобуры'];

const cardsCars = [
  {
    img: img1,
    name: 'Автокраны'
  },
  {
    img: img2,
    name: 'Автовышки'
  },
  {
    img: img3,
    name: 'Манипуляторы'
  },
  {
    img: img4,
    name: 'Бортовые грузовые авто'
  },
  {
    img: img5,
    name: 'Самосвалы'
  },
  {
    img: img6,
    name: 'Фронтальные погрузчики'
  },
  {
    img: img7,
    name: 'Экскаваторы-погрузчики'
  },
  {
    img: img8,
    name: 'Экскаваторы'
  },
  {
    img: img9,
    name: 'Ямобуры'
  }
];

const Technic = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.cars}>
          <h1 className={styles['cars__title']}>АРЕНДА СТРОИТЕЛЬНОЙ ТЕХНИКИ В ЕКАТЕРИНБУРГЕ</h1>
          <ul className={styles['cars__cards']}>
            {cardsCars.map((elem, index) => {
              return (
                <li key={index} className={styles['cars__item']}>
                  <img className={styles['cars__img']} src={elem.img} alt={elem.name}></img>
                  <p className={styles['cars__name']}><a className={styles['cars__link']} href='/'>{elem.name}</a></p>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.catalog}>
          <h1 className={styles['catalog__title']}>КАТАЛОГ СПЕЦТЕХНИКИ</h1>
          <nav className={styles['menu']}>
            <ul className={styles['menu__list']}>
              {cars.map((elem, index) => {
                return (
                  <li key={index} className={styles['menu__item']}>
                    <a className={styles['menu__link']} href='/'>{elem}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Technic