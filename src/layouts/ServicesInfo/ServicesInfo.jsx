import './ServicesInfo.scss'

const ServicesInfo = (props) => {
    const {
        title,
        titleId,
        className,
        description,
        image,
        imageAlt,
        messageForm,
    } = props

    return (
        <div
            className={className(className, 'container')}
            aria-label={title}
        >
            <h1 id={titleId}>{titleId}</h1>
            <div className="services-info">
                <div className="services-info__image">{image}</div>
                {description && (
                    <div className="services-info__description">{description}</div>
                )}
                {messageForm && (
                    <div className="services-info__message-form">{messageForm}</div>
                )}
            </div>
        </div>
    )
}

export default ServicesInfo