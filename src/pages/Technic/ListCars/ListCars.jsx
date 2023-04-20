import React from 'react';
import styles from './ListCars.module.scss';
import { cardsCars } from './CardsCars';

const ListCars = () => {
    return (
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
    )
};

export default ListCars