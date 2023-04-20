import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ListCards.module.scss';

const ListCards = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.listCards);

    return (
        <ul className={styles.list}>
            {data.map((elem) => {
                return (
                    <li key={elem.id} className={styles['list__item']}>
                        <p className={styles['list__name']}>{elem.name}</p>
                        <img className={styles['list__img']} alt='material' src={elem.img}></img>
                        <p className={styles['list__text']}>{elem.text}</p>
                        <p className={styles['list__price']}>{elem.price}</p>
                        <Link to={`/product/${elem.id}`}><img className={styles['list__btn']} alt='button' src={elem.btn}></img></Link>
                    </li>
                )
            })}
        </ul>
    )
};

export default ListCards