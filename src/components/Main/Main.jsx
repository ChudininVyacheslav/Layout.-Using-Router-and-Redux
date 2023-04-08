import React from 'react';
import styles from './Main.module.scss';
import img1 from '../../assets/main/img-1.jpg';
import img2 from '../../assets/main/img-2.jpg';
import img3 from '../../assets/main/img-3.jpg';
import img4 from '../../assets/main/img-4.png';
import img5 from '../../assets/main/img-5.jpg';
import img6 from '../../assets/main/img-6.jpg';
import img7 from '../../assets/main/img-7.png';
import img8 from '../../assets/main/img-8.jpg';
import img9 from '../../assets/main/img-9.png';
import img10 from '../../assets/main/img-10.png';
import img11 from '../../assets/main/img-11.png';
import img12 from '../../assets/main/img-12.png';
import img13 from '../../assets/main/img-13.png';
import img14 from '../../assets/main/img-14.png';
import img15 from '../../assets/main/img-15.png';
import btnImage from '../../assets/main/btn.png';
import img from '../../assets/main/img.png';

const materials = [
  'Песок', 'щебень', 'глина', 'отсев', 'бутовый камень', 'земля', 'торф', 'перегной', 'навоз'];

const cards = [
  {
    name: 'Щебень',
    img: img1,
    text: 'Продажа и доставка щебня различных фракций: 5-20, 20-40, 40-70',
    price: 'от 500 руб. за куб',
    btn: btnImage
  },
  {
    name: 'Бут или скала',
    img: img2,
    text: 'Продажа и доставка бутового камня в Екатеринбурге',
    price: 'от 200 руб. за куб',
    btn: btnImage
  },
  {
    name: 'Земля',
    img: img3,
    text: 'Продажа и доставка плодородной земли, чернозема',
    price: 'от 200 руб. за куб',
    btn: btnImage
  },
  {
    name: 'Торф',
    img: img4,
    text: 'Продажа качественного торфа с доставкой по Екатеринбургу',
    price: 'от 300 руб. за куб',
    btn: btnImage
  },
  {
    name: 'Перегной',
    img: img5,
    text: 'Продажа перегноя с доставкой по Екатеринбургу',
    price: 'от 500 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'Навоз',
    img: img6,
    text: 'Продажа и доставка навоза различных типов в Екатеринбурге',
    price: 'от 300 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'Отсев',
    img: img7,
    text: 'Продажа отсева различных фракций и доставка по Екатеринбургу',
    price: 'от 450 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'Песок',
    img: img8,
    text: 'Песок строительный, речной, мытый с доставкой по Екатеринбургу',
    price: 'от 350 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'Глина',
    img: img9,
    text: 'Продажа глины с доставкой по Екатеринбургу',
    price: 'от 300 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'Дресва',
    img: img10,
    text: 'Продажа дресвы с доставкой по Екатеринбургу',
    price: 'от 250 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'Галька',
    img: img11,
    text: 'Продажа гальки с доставкой по Екатеринбургу',
    price: 'от 300 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'Уголь',
    img: img12,
    text: 'Продажа и доставка каменного угля в Екатеринбурге',
    price: 'от 3300 руб./тонна',
    btn: 'Заказать'
  },
  {
    name: 'Бетон',
    img: img13,
    text: 'Продажа бетона с доставкой по Екатеринбургу',
    price: 'от 1950 руб. за куб',
    btn: 'Заказать'
  },
  {
    name: 'ЖБИ изделия',
    img: img14,
    text: 'Продажа ЖБИ изделий с доставкой по Екатеринбургу',
    price: 'от 2000 руб.',
    btn: 'Заказать'
  },
  {
    name: 'Вывоз снега',
    img: img15,
    text: 'Уборка и вывоз снега в Екатеринбурге и пригороде',
    price: 'договорная',
    btn: 'Заказать'
  },
];

const Main = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles['container__title']}>КАТАЛОГ МАТЕРИАЛОВ</h1>

      <ul className={styles.list}>
        {cards.map((elem, index) => {
          return (
            <li key={index} className={styles['list__item']}>
              <p className={styles['list__name']}>{elem.name}</p>
              <img className={styles['list__img']} alt='material' src={elem.img}></img>
              <p className={styles['list__text']}>{elem.text}</p>
              <p className={styles['list__price']}>{elem.price}</p>
              <a href='/'><img className={styles['list__btn']} alt='button' src={btnImage}></img></a>
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
}

export default Main