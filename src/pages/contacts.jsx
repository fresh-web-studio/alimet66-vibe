import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"

import { useState } from 'react'

export const metadata = {
    title: 'Контакты - ',
}

export default () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then(
                result => {
                    alert('Сообщение отправлено!');
                    console.log(result.text);
                },
                error => {
                    alert('Ошибка отправки. Попробуйте еще раз.');
                    console.error(error.text);
                }
            );
    };

    return (
        <>
            <div className="container non-home-page">
                <h1>Контакты</h1>
                <div className="contacts">
                    <div className="contacts__city">Екатеринбург</div>
                    <div>ул.Краснознаменная, 55</div>
                    <div className="contacts__time">без выходных 9:00 - 20:00</div>
                    <div className="contacts__tel">+7 (901) 856‒33‒42</div>
                    <div className="contacts__mail">alimet66@mail.ru</div>
                </div>
                <div className="map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A517746b822e8fcd7cbcbb3042a1776598b5eda50af2dda09206098058f174f48&amp;source=constructor" width="100%" height="480" frameborder="0"></iframe>
                </div>
                {/*
                <div className="fit-back">
                    <h2 className="fit-back__title">Обратная связь</h2>
                    <div className="map"></div>
                    <form
                        className="fit-back__form"
                        name="Страница контакты"
                        action="PHPmailer/smart.php"
                        method="post"
                    >
                        <Field
                            className="fit-back__form-cell"
                            label="Имя:"
                            placeholder="Имя*"
                            name="rm_name"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell"
                            label="Телефон:"
                            placeholder="+7 (999) 999-99-99*"
                            type="tel"
                            inputMode="tel"
                            mask="+7 (000) 000-00-00"
                            name="rm_phone"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell"
                            label="E-mail:"
                            placeholder="E-mail*"
                            type="email"
                            name="rm_mail"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell fit-back__form-cell--wide"
                            label="Текст соощения:"
                            type="textarea"
                            placeholder="Текст*"
                            name="rm_text"
                            isRequired
                        />

                        <div className="fit-back__form-cell fit-back__form-cell--wide fit-back__form-cell--actions">
                            <Checkbox
                                className="fit-back__form-agreement"
                                label="Принимаю условия политики информационной безопасности"
                                isRequired
                            />
                        </div>
                        <Button
                            className="fit-back__form-submit-button"
                            label="Отправить"
                            type="submit"
                        />
                    </form>
                </div>
*/}
            </div>

        </>
    )
}