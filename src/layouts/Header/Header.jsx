import './Header.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import BurgerButton from '@/components/BurgerButton'
import Button from '@/components/Button'


const Header = (props) => {
    const {
        url,
    } = props

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    const menuItems = [
        {
            label: 'О компании',
            href: '/o-kompanii',
        },
        {
            label: 'Услуги',
            subLink: [
                {
                    sublabel: 'Прием лома черных металлов',
                    href: '/services/priem-loma-chernyh-metallov',
                },
                {
                    sublabel: 'Прием лома цветных металлов',
                    href: '/services/priem-loma-cvetnyh-metallov',
                },
                {
                    sublabel: 'Демонтаж металлолома',
                    href: '/services/demontazh-metalloloma',
                },
                {
                    sublabel: 'Погрузка и вывоз металлолома',
                    href: '/services/pogruzka-i-vyvoz-metalloloma',
                }
            ],
        },
        {
            label: 'Цены',
            href: '/prices',
        },
        {
            label: 'Контакты',
            href: '/contacts',
        },
    ];

    const handleSubmenuToggle = (event) => {
        const submenu = event.currentTarget.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('header__submenu_visible');
        }
    };

    return (
        <header className="header" data-js-overlay-menu="">
            <div className="header__contacts">
                <div className="container">
                    <div className="hidden-mobile header__city">Нижний Тагил, ул. Краснознаменная, 55</div>
                    <div className="header__tel"><a href="tel:%2B7%28912%29229-09-85">+7 (912) 229-09-85</a>, <a href="tel:%2B7%28912%29030-85-08">+7 (912) 030-85-08</a></div>
                    <div className="hidden-tablet hidden-mobile header__time">без выходных 9:00 - 19:00</div>
                </div>
            </div>
            <div className="header__inner">
                <div className="container">


                    <Logo
                        className="header__logo"
                        loading="eager"
                    />
                    <dialog
                        className="header__overlay-menu-dialog"
                        data-js-overlay-menu-dialog=""
                    >
                        <nav className="header__menu">
                            <ul className="header__menu-list">
                                {menuItems.map(({ label, href, subLink }, index) => (
                                    <li className="header__menu-item" key={index}>
                                        {subLink && subLink.length > 0 ? (
                                            <a
                                                className={classNames('header__menu-link', 'is-submenu-trigger')}
                                                onClick={handleSubmenuToggle}
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <a
                                                className={classNames('header__menu-link', {
                                                    'is-active': href === url,
                                                })}
                                                href={`${href}`}
                                            >
                                                {label}
                                            </a>
                                        )}
                                        {subLink && subLink.length > 0 && (
                                            <ul className="header__submenu">
                                                {subLink.map(({ sublabel, href }, idx) => (
                                                    <li className="header__submenu-item" key={idx}>
                                                        <a
                                                            className="header__submenu-link"
                                                            href={`${href}`}
                                                        >
                                                            {sublabel}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="header__actions"></div>
                    </dialog>
                    <BurgerButton
                        className="header__burger-button visible-mobile"
                        extraAttrs={{
                            'data-js-overlay-menu-burger-button': '',
                        }}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header