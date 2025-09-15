import Button from '@/components/Button'
import './About.scss'

import aboutImgSrc from '@/assets/images/about/company.jpg'


const About = () => {
    return (
        <section className="about container" aria-labelledby="about-title">
            <div className="about__column">
                <img
                    className="about__image"
                    src={aboutImgSrc}
                    alt=""
                    width="755"
                    height="500"
                    loading="lazy"
                />
            </div>
            <div className="about__column">
                <h2 className="about__title">Компания МеталлПром</h2>
                <div className="about__inf">Мы работаем как с физическими, так и с юридическими лицами</div>
                <div className="about__text">
                    Многолетний опыт наших сотрудников позволяет Вам быстро, качественно и честно обменять ненужный металлолом на нужные звонкие монеты. С нами выгодно!
                </div>
                <Button
                    className="about__button"
                    label="Подробнее"
                    href="/o-kompanii"
                />
            </div>

        </section>
    )
}

export default About