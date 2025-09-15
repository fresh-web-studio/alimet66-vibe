import './Footer.scss'
import iconLocation from '@/assets/icons/location.svg'
import iconTime from '@/assets/icons/clock.svg'
import iconPhone from '@/assets/icons/phone.svg'
import iconMail from '@/assets/icons/mail.svg'
import Modal from '@/components/Modal'

const Footer = () => {
    const menuItems = [
        {
            title: 'Адреса',
            icon: iconLocation,
            links: ['Нижний Тагил', 'ул. Краснознаменная, 55'],
        },
        {
            title: 'Телефоны',
            icon: iconPhone,
            links: ['+7 (912) 229-09-85', '+7 (912) 030-85-08'],
            href: ['tel:%2B7%28912%29229-09-85', 'tel:%2B7%28912%29030-85-08'],
        },
        {
            title: 'Работаем',
            icon: iconTime,
            links: ['Без выходных 9:00 - 19:00'],
        },
        {
            title: 'E-mail',
            icon: iconMail,
            links: ['mail@mp66.ru'],
            href: ['mailto:mail@mp66.ru'],
        },
    ]

    return (
        <footer className='footer'>
            <div className="footer__inner container">
                <nav className="footer__menu">
                    {menuItems.map(({ title, icon, links, href }, index) => (
                        <div className="footer__menu-column" key={index}>
                            <p className="footer__menu-title h3">
                                <img
                                    src={icon}
                                    alt=""
                                    width={42}
                                    height={42}
                                /> {title}
                            </p>
                            {links?.length > 0 && (
                                <ul className="footer__menu-list">
                                    {links.map((link, i) => (
                                        <li className="footer__menu-item" key={i}>
                                            {href ? <a className="footer__menu-link" href={href[i]}>{link}</a> : <span className="footer__menu-text">{link}</span>}
                                        </li>
                                    ))}

                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <div className="map" style={{ display: 'none' }}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab28648cd7fde7627c53afec8d1d2ba035bf186325485620926a30e419cbc382f&amp;source=constructor" width="100%" height="480" frameborder="0"></iframe>
            </div>

            <div className="footer__inner container">
                <div className="footer__extra">
                    <p className="footer__copyright">
                        © OOO «Компания Металлпром», <time datatime="2017-2025">2017-2025</time>. <a className="footer__extra-links" href="/security">Политика информационной безопасности</a>
                    </p>
                </div>
            </div>
            <Modal />
        </footer>

    )
}


export default Footer