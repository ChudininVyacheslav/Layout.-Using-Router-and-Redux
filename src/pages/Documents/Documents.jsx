import React from 'react';
import styles from './Documents.module.scss';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import img from '../../assets/documents/img.jpg';

const Documents = () => {
  return (
    <div>
      <Header />
      <img className={styles.img} src={img} alt='лицензия'></img>
      <Footer />
    </div>
  )
}

export default Documents