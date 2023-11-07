import React from 'react';
import styles from './DeliveryMaterials.module.scss';
import { Link } from 'react-router-dom';

const materials = [{ material: 'Щебень', url: '/Layout.-Using-Router-and-Redux/product/1' }, { material: 'Скала', url: '/Layout.-Using-Router-and-Redux/product/2' }];

const DeliveryMaterials = () => {
    return (
        <div className={styles['text']}>
            <p className={styles['text__materials']}>Продажа, доставка нерудных и сыпучих материалов в Екатеринбурге: {materials.map((elem) => {
                return (
                    <Link key={elem.url} to={elem.url} className={styles['text__link']}>{`${elem.material}, `}</Link>
                )
            })}<Link key='/product/3' to='/Layout.-Using-Router-and-Redux/product/3' className={styles['text__link']}>Земля</Link></p>
            <p className={styles['text__slogan']}>Низкие цены, реальные сроки!</p>
        </div>
    )
};

export default DeliveryMaterials