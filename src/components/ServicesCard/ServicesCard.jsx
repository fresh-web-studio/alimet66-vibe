import './ServicesCard.scss';
import { Image } from 'minista'

const ServicesCard = (props) => {
    const {
        url,
        title,
        images = [],
        description,
    } = props

    return (
        <a className="services-card" href={url}>
            <div className="services-card__images">
                {images.map((imgSrc, index) => (
                    <Image
                        className="services-card__image"
                        src={imgSrc}
                        key={index}
                    />
                ))}
            </div>
            <div className="services-card__body">
                <h2 className="services-card__body-title h3">
                    {title}
                </h2>
                <div className="services-card__body-description">
                    {description}
                </div>
            </div>
        </a>
    )
}


export default ServicesCard