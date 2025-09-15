import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"
import demontazhImgSrc from '@/assets/images/services/demont.jpg'

export const metadata = {
    title: 'Демонтаж металлолома - ',
}

export default () => {
    return (
        <>
            <div className="container non-home-page">
                <h1>Демонтаж металлолома</h1>
                <div className="services-info">
                    <img
                        className="services-info__image"
                        src={demontazhImgSrc}
                        alt=""
                        width="755"
                        height="467"
                        loading="lazy"
                    />

                    <div className="services-info__description">
                        <p>Нередко разборка крупногабаритных объектов является проблематичной как для предприятий, так и для физических лиц. <strong>Демонтаж металлолома</strong> является еще одним направлением деятельности ООО «Компания МеталлПром».</p>
                        <p>Те, кто уже столкнулся с проблемами демонтажа, понимают, что этот процесс требует ответственного подхода, наличия специальной техники и инструмента, а также квалифицированных рабочих. ООО «Компания МеталлПром» обладает всеми этими составляющими.</p>
                        <p>Организация работ на каждом объекте <strong>в Нижнем Тагиле</strong> и на территории <strong>Свердловской области</strong> происходит после анализа всех особенностей, в том числе сложности разборки и необходимости сохранить соседние конструкции.</p>
                        <p>Компания предлагает:</p>
                        <ul>
                            <li>спецтехнику и автотранспорт, которые позволят разобрать конструкции в кратчайшие сроки;</li>
                            <li>качественный демонтаж конструкций благодаря современным технологиям;</li>
                            <li>вывоз и прием лома черного и цветного металла по выгодной для клиента цене.</li>
                        </ul>
                        <p>Все работы по разборке, погрузке и вывозу лома компания берет на себя. Клиенту остается только убедиться в качестве и удобной организации предлагаемых услуг, <strong>сдать металлолом</strong>, а после забрать деньги. Чтобы воспользоваться услугами компании, нужно оставить заявку, после чего специалист свяжется с клиентом и обговорит все детали предстоящих работ.</p>
                    </div>
                    <div className="fit-back">
                        <h2 className="fit-back__title">Обратная связь</h2>
                        <div className="map"></div>
                        <form
                            className="fit-back__form"
                            name="Страница демонтаж металлолома"
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