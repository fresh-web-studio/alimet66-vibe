import Button from '@/components/Button'
import './Request.scss'

const Request = () => {
    return (
        <section className="request" aria-labelledby="request-title">
            <div className="container">
                <h2 className="request__title">Какой металлолом мы принимаем</h2>
                <div className="request__text">
                    Все виды черных металлов, нержавейка, алюминий, свинец, латунь, АКБ, медь, лом титана            </div>
                <Button
                    className="request__button"
                    label="Узнать цену лома"
                    href="/prices"
                />
            </div>
        </section>
    )
}

export default Request