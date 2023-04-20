import React from 'react';
import styles from './Info.module.scss';

const Info = () => {
    return (
        <div className={styles['info']}>
            <p className={styles['info__contacts']}>Контакты:</p>
            <p className={styles['info__number']}><span className={styles['info__telephone']}>Телефон: </span>+7 (343) 363-14-01</p>
            <p className={styles['info__location']}><span className={styles['info__address']}>Адрес: </span>Екатеринбург , пр-т Седова, 31</p>
            <p className={styles['info__mail']}><span className={styles['info__email']}>E-Mail: </span><a className={styles['info__email-link']} href='mailto:info@d196.ru'>info@d196.ru</a></p>
        </div>
    )
};

export default Info