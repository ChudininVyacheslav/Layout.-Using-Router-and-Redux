import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/header/logo-header.png';
import { Link } from 'react-router-dom';



const menu = [{ url: '/', name: 'каталог' }, { url: '/technic', name: 'спецтехника' }, { url: '/documents', name: 'документы' }, { url: '/contacts', name: 'контакты' }, {url: '/poleznye-materialy' , name: 'статьи'}];

const Header = () => {
    return (
        <div className={styles.header}>
            <img alt='logo' className={styles['header__logo']} src={logo}></img>
            <nav className={styles.nav}>
                <ul className={styles['nav__list']}>
                    {menu.map((elem, index) => {
                       return (
                            <li className={styles['nav__item']} key={elem[index]}><Link to={elem.url} className={styles['nav__link']}>{elem.name}</Link></li>)
                    })}
                </ul>
            </nav>
            <div className={styles.info}>
                <p className={styles['info__text']}>Погрузка круглосуточно! Звоните!</p>
                <p className={styles['info__number']}><a className={styles['info__number-link']} href='+73433631175'>+7 (343) 363-11-75</a></p>
            </div>
        </div>
    )
};

export default Header