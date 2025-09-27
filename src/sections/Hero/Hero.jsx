import './Hero.scss'
import Button from '@/components/Button'

const Hero = () => {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <h1 className='visually-hidden'>Главная</h1>
            <div className="hero__pano">
                <div className="hero__pano-inner container">
                    <div className="hero__pano-inner-title">Максимально дорого</div>
                    <div className="hero__pano-inner-subtitle">Покупаем лом черных и цветных металлов</div>
                    <div className="hero__pano-inner-body">Работаем с физическими и юридическими лицами.</div>
                    <div className="hero__pano-inner-button">
                        <Button
                            className="hero__button"
                            label="Подробнее"
                            href="/service"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero