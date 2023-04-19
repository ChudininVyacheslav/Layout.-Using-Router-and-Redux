import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/foter/logo-footer.png';

const materials = [
  'щебень', 'бут', 'земля', 'торф', 'перегной', 'навоз', 'отсев', 'песок', 'глина', 'бетон', 'мрамор молотый', 'тампонажные цементы'
];

const Foter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img alt='logo' className={styles['footer__logo']} src={logo}></img>

        <div className={styles['text']}>
          <p className={styles['text__materials']}>Продажа, доставка нерудных и сыпучих материалов в Екатеринбурге: {materials.map((elem, index) => {
            return (
              <a key={index} href='/' className={styles['text__link']}>{`${elem}, `}</a>
            )
          })}</p>
          <p className={styles['text__slogan']}>Низкие цены, реальные сроки!</p>
        </div>

        <div className={styles['info']}>
          <p className={styles['info__contacts']}>Контакты:</p>
          <p className={styles['info__number']}><span className={styles['info__telephone']}>Телефон: </span>+7 (343) 363-14-01</p>
          <p className={styles['info__location']}><span className={styles['info__address']}>Адрес: </span>Екатеринбург , пр-т Седова, 31</p>
          <p className={styles['info__mail']}><span className={styles['info__email']}>E-Mail: </span><a className={styles['info__email-link']} href='mailto:info@d196.ru'>info@d196.ru</a></p>
        </div>
      </div>
      <div><p className={styles['footer__years']}> ©2015-2018 Доставка196 - надежный поставщик материалов</p></div>

    </footer >
  )
};

export default Foter