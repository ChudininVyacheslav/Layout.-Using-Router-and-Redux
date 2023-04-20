import React from 'react';
import styles from './Text.module.scss';
import { Link } from 'react-router-dom';

const materials = [{ material: 'Щебень', url: '/product/1' }, { material: 'Скала', url: '/product/2' }];

const Text = () => {
    return (
        <div className={styles['text']}>
            <p className={styles['text__materials']}>
                Любой объект - будь то стройка многоквартирного дома, строительство дороги, обустройство территории, ремонт или строительство загородного коттеджа, садово-огородные хлопоты не обходятся без сыпучих и нерудных материалов.
                {materials.map((elem) => {
                    return (
                        <Link className={styles['text__materials-link']} to={elem.url}>{`${elem.material}, `}</Link>
                    )
                })}<Link className={styles['text__materials-link']} to='/product/3'>Земля</Link>  – это основные и самые востребованные материалы.</p>
                <p className={styles['text__materials']}>От качества, сроков поставки и правильного хранения зависит очень многое в современном строительстве, ведь из-за задержки нескольких грузовиков с материалами может «встать» целый объект, а это простой огромного количества техники и людских ресурсов, что влечет за собой не малые финансовые потери.</p>
                <p className={styles['text__materials']}>Компания «Доставка196» предлагает приобрести нерудные и сыпучие материалы с доставкой по Екатеринбургу и всей Свердловской области. И гарантирует – доставку материала в точно оговоренный срок, в любых объемах и по очень привлекательным ценам. Мы предлагаем только качественные материалы, на всю продукцию предоставляется сертификат качества.</p>
                <p className={styles['text__materials']}>Так же наша компания осуществляет такие работы как вывоз строительного мусора, снега и прочее. Еще Вы можете воспользоваться услугой по аренде современных самосвалов марок Камаз и HOWO.</p>
                <p className={styles['text__materials']}>Оформить заказ на сыпучие материалы Вы можете любым удобным для Вас способом: через сервис он-лайн заявки на сайте, позвонить по телефону или приехать в наш офис. Если у Вас возникло желание похвалить нас или указать на недостатки, да и просто почитать о нашей работе – воспользуйтесь сервисом ОТЗЫВЫ. Нам очень важно Ваше мнение!</p>
            <p className={styles['text__materials_bold']}>Надеемся на взаимовыгодное сотрудничество! Успехов в делах!
                Компания «Доставка196»</p>
        </div>
    )
};

export default Text