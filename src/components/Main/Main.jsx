import React from 'react';
import styles from './Main.module.scss';
import banner from '../../assets/main/img.png';
import ListCards from './ListCards/ListCards';
import Text from './Text/Text';

const Main = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles['container__title']}>КАТАЛОГ МАТЕРИАЛОВ</h1>
      <ListCards />
      <h2 className={styles['container__title']}>ПРОДАЖА И ДОСТАВКА СЫПУЧИХ И НЕРУДНЫХ МАТЕРИАЛОВ В ЕКАТЕРИНБУРГЕ</h2>
      <Text />
      <img className={styles.banner} alt='banner' src={banner}></img>
    </div>
  )
};

export default Main