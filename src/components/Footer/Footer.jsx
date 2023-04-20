import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/footer/logo-footer.png';
import DeliveryMaterials from './DeliveryMaterials/DeliveryMaterials';
import Info from './Info/Info';

const Foter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img alt='logo' className={styles['footer__logo']} src={logo}></img>
        <DeliveryMaterials />
        <Info/>
      </div>
      <div><p className={styles['footer__years']}> ©2015-2018 Доставка196 - надежный поставщик материалов</p></div>
    </footer >
  )
};

export default Foter