import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const menu = [{ url: '/', name: 'каталог' }, { url: '/technic', name: 'спецтехника' }, { url: '/documents', name: 'документы' }, { url: '/contacts', name: 'контакты' }];

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles['nav__list']}>
                {menu.map((elem) => {
                    return (
                        <li className={styles['nav__item']} key={elem.url}><Link to={elem.url} className={styles['nav__link']}>{elem.name}</Link></li>)
                })}
            </ul>
        </nav>
    )
};

export default Navigation