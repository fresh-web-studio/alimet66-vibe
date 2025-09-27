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
            links: ['Екатеринбург', 'Шефская улица, 115'],
        },
        {
            title: 'Телефоны',
            icon: iconPhone,
            links: ['+7 (901) 856‒33‒42'],
            href: ['tel:%2B7%28901%29856-33-42'],
        },
        {
            title: 'Работаем',
            icon: iconTime,
            links: ['Без выходных 9:00 - 20:00'],
        },
        {
            title: 'E-mail',
            icon: iconMail,
            links: ['alimet66@mail.ru'],
            href: ['mailto:alimet66@mail.ru'],
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
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A517746b822e8fcd7cbcbb3042a1776598b5eda50af2dda09206098058f174f48&amp;source=constructor" width="100%" height="480" frameborder="0"></iframe>
            </div>

            <div className="footer__inner container">
                <div className="footer__extra">
                    <p className="footer__copyright">
                        © OOO «Компания Алимет», <time datatime="2017-2025">2017-2025</time>. <a className="footer__extra-links" href="/security">Политика информационной безопасности</a>
                    </p>
                </div>
            </div>
            {/*
            <Modal />
            */}
        </footer>

    )
}


export default Footer