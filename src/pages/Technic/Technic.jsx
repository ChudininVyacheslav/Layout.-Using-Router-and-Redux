import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Technic.module.scss';
import ListCars from './ListCars/ListCars';
import Menu from './Menu/Menu';

const Technic = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.cars}>
          <h1 className={styles['cars__title']}>АРЕНДА СТРОИТЕЛЬНОЙ ТЕХНИКИ В ЕКАТЕРИНБУРГЕ</h1>
          <ListCars />
        </div>
        <div className={styles.catalog}>
          <h1 className={styles['catalog__title']}>КАТАЛОГ СПЕЦТЕХНИКИ</h1>
          <Menu />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Technic