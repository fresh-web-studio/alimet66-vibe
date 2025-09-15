import './EdgeCard.scss'

const EdgeCard = (props) => {
    const {
        number,
        title,
    } = props

    return (
        <div className="edge-card">
            <div className="edge-card__number">{number}</div>
            <h4 className="edge-card__title h4">{title}</h4>
        </div>
    )
}

export default EdgeCard