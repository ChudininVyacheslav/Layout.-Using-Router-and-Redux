import React from 'react';
import styles from './Info.module.scss';

const Info = () => {
    return (
        <div className={styles.contacts}>
        <h1 className={styles.title}>Контанкты</h1>
        <div className={styles.text}>
          <p>Телефон: +7 (343) 363-81-75</p>
          <p>Адрес: Екатеринбург , пр-т Седова, 31</p>
          <p>E-Mail: <a className={styles.link} href='mailto:info@d196.ru'>info@d196.ru</a></p>
        </div>
      </div>
    )
};

export default Info