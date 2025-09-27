import Button from '@/components/Button'
import './Order.scss'

const Order = () => {
    return (
        <section className="order container" aria-labelledby="order-title">
            <div className="order__inf">Хотите сэкономить свое время и силы?</div>
            <h2 className="order__title">Сделаем за 1 день!</h2>
            <div className="order__text">
                Приедем, загрузим, увезем и оплатим!
            </div>
            <div className="order__text">
                Звоните нам: <a href="tel:%2B7%28901%29856‒33‒42">+7 (901) 856‒33‒42</a>
            </div>
            {/*
            <Button
                label="Заказать демонтаж / вывоз лома"
                className="mail__button"
                id="show-dialog-btn"
                type="button"
                onClick="modalMore.showModal"
                extraAttrs={{
                    'data-js-modal-more-button': '',
                }}
            />
            */}
        </section>
    )
}

export default Order