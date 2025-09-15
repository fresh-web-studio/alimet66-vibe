import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"
import chernyhImgSrc from '@/assets/images/services/lom1.jpg'

export const metadata = {
    title: 'Прием лома черных металлов - ',
}

export default () => {
    return (
        <>
            <div className="container non-home-page">
                <h1>Прием лома черных металлов</h1>
                <div className="services-info">
                    <img
                        className="services-info__image"
                        src={chernyhImgSrc}
                        alt=""
                        width="755"
                        height="467"
                        loading="lazy"
                    />
                    <div className="services-info__description">
                        <p>Вы можете нам сдать:&nbsp;</p>
                        <ul>
                            <li>габаритный и негабаритный чугун, а также бытовой с содержанием фосфора;</li>
                            <li>сталь: жесть, стружку, в том числе автомобили.</li>
                            <li>Благодаря наличию собственных пунктов приема лома черного металла мы можем предложить удобную схему расчета и более высокие, чем у конкурентов, расценки.</li>
                        </ul>
                        <p>Для предприятий переработка черного металла обходится гораздо дешевле, чем его производство из руды, поэтому прием этого сырья в Свердловской области актуален как никогда. А для населения продажа металлолома является способом заработать. Так, <strong>прием лома черного металла</strong> в Нижнем Тагиле и близлежащих городах <strong>Свердловской области</strong> осуществляет ООО «Компания МеталлПром»: здесь можно выгодно сдать ненужный чермет и получить за это деньги.</p>
                        <p>Цена за 1 кг черного металла будет дешевле, чем за тот же объем цветмета. Тем не менее, чермет чаще всего сдают крупными партиями, поэтому вознаграждение может быть внушительным. Компания ООО «Компания МеталлПром» принимает в любых количествах:</p>
                        <ul>
                            <li>чугун – габаритный или негабаритный, в том числе и бытовой (ванны, печи, батареи);</li>
                            <li>сталь – габаритная или негабаритная (стружка, старые рельсы, жесть, кузова старых автомобилей и т.д.).</li>
                        </ul>
                        <p><strong>Как выгодно сдать лом черного металла в Нижнем Тагиле?</strong></p>
                        <p>Чтобы <strong>выгодно сдать лом чермета</strong>, в первую очередь нужно отсортировать лом черного металла от цветного и очистить его. Во-первых, сдавать лом цветмета выгоднее, чем</p>
                        <p>черный металл, а во-вторых, за загрязненный и ржавый лом удастся получить меньшее вознаграждение.</p>
                        <p>Цена зависит и от объемов принимаемого металлолома – сдавать крупные партии гораздо выгоднее, чем несколько кг чермета. Кроме того, «бонус» получают и постоянные клиенты: для тех, кто регулярно сдает металлолом, условия сотрудничества обговариваются отдельно.</p>
                        <p>&nbsp;</p>
                    </div>
                    <div className="fit-back">
                        <h2 className="fit-back__title">Обратная связь</h2>
                        <div className="map"></div>
                        <form
                            className="fit-back__form"
                            name="Страница прием лома черных металлов"
                            action="../PHPmailer/smart.php"
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
                </div>
            </div>
        </>
    )
}