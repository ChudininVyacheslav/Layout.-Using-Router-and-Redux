import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/header/logo-header.png';
import Navigation from './Navigation/Navigation';
import Contacts from './Contacts/Contacts';

const Header = () => {
    return (
        <div className={styles.header}>
            <img alt='logo' className={styles['header__logo']} src={logo}></img>
            <Navigation />
            <Contacts />
        </div>
    )
};

export default Header