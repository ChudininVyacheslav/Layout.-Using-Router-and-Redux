import React from 'react';
import styles from './Menu.module.scss';

const cars = ['Автокраны', 'Автовышки', 'Манипуляторы', 'Бортовые грузовые авто', 'Самосвалы', 'Фронтальные погрузчики', 'Экскаваторы-погрузчики', 'Экскаваторы', 'Ямобуры'];

const Menu = () => {
    return (
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
    )
};

export default Menu