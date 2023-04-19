import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './Breakstone.module.scss';

const Breakstone = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.cards[0]);

  return (
    <div>
      <Header />
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.container}>
        <div className={styles['item-1']}>
          <img className={styles['item-1__img']} src={data.img} alt='Щебень'></img>
        </div>
        <div className={styles['item-2']}>
          <p className={styles['item-2__name']}>{data.name}</p>
          <p className={styles['item-2__delivery']}>{data.delivery}</p>
          <p className={styles['item-2__description']}>{data.description}</p>
          <p className={styles['item-2__price']}>{data.minPrice}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Breakstone