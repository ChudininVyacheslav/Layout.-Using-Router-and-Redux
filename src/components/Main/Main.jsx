import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';
import img from '../../assets/main/img.png';
import { useDispatch, useSelector } from 'react-redux';


const materials = [
  'Песок', 'щебень', 'глина', 'отсев', 'бутовый камень', 'земля', 'торф', 'перегной', 'навоз'];

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.listCards);
  console.log(data)
  return (
    <div className={styles.container}>
      <h1 className={styles['container__title']}>КАТАЛОГ МАТЕРИАЛОВ</h1>
      <ul className={styles.list}>
        {data.map((elem, index) => {
          return (
            <li key={index} className={styles['list__item']}>
              <p className={styles['list__name']}>{elem.name}</p>
              <img className={styles['list__img']} alt='material' src={elem.img}></img>
              <p className={styles['list__text']}>{elem.text}</p>
              <p className={styles['list__price']}>{elem.price}</p>
              <Link to={elem.url}><img className={styles['list__btn']} alt='button' src={elem.btn}></img></Link>
            </li>
          )
        })}
      </ul>
      <h2 className={styles['container__title']}>ПРОДАЖА И ДОСТАВКА СЫПУЧИХ И НЕРУДНЫХ МАТЕРИАЛОВ В ЕКАТЕРИНБУРГЕ</h2>
      <div className={styles['text']}>
        <p className={styles['text__materials']}>
          Любой объект - будь то стройка многоквартирного дома, строительство дороги, обустройство территории, ремонт или строительство загородного коттеджа, садово-огородные хлопоты не обходятся без сыпучих и нерудных материалов.
          {materials.map((elem) => {
            return (
              <a className={styles['text__materials-link']} href='/'>{`${elem}, `}</a>
            )
          })}<a className={styles['text__materials-link']} href='/'>бетон</a>  – это основные и самые востребованные материалы.</p>
        <p className={styles['text__materials']}>От качества, сроков поставки и правильного хранения зависит очень многое в современном строительстве, ведь из-за задержки нескольких грузовиков с материалами может «встать» целый объект, а это простой огромного количества техники и людских ресурсов, что влечет за собой не малые финансовые потери.</p>
        <p className={styles['text__materials']}>Компания «Доставка196» предлагает приобрести нерудные и сыпучие материалы с доставкой по Екатеринбургу и всей Свердловской области. И гарантирует – доставку материала в точно оговоренный срок, в любых объемах и по очень привлекательным ценам. Мы предлагаем только качественные материалы, на всю продукцию предоставляется сертификат качества.</p>
        <p className={styles['text__materials']}>Так же наша компания осуществляет такие работы как вывоз строительного мусора, снега и прочее. Еще Вы можете воспользоваться услугой по аренде современных самосвалов марок Камаз и HOWO.</p>
        <p className={styles['text__materials']}>Оформить заказ на сыпучие материалы Вы можете любым удобным для Вас способом: через сервис он-лайн заявки на сайте, позвонить по телефону или приехать в наш офис. Если у Вас возникло желание похвалить нас или указать на недостатки, да и просто почитать о нашей работе – воспользуйтесь сервисом ОТЗЫВЫ. Нам очень важно Ваше мнение!</p>
        <p className={styles['text__materials_bold']}>Надеемся на взаимовыгодное сотрудничество! Успехов в делах!
          Компания «Доставка196»</p>
      </div>
      <img alt='img' src={img}></img>
    </div>
  )
};

export default Main