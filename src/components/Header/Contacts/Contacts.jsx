import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
    return (
        <div className={styles.info}>
            <p className={styles['info__text']}>Погрузка круглосуточно! Звоните!</p>
            <p className={styles['info__number']}><a className={styles['info__number-link']} href='+73433631175'>+7 (343) 363-11-75</a></p>
        </div>
    )
}

export default Contacts