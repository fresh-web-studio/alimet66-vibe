import classNames from 'classnames'
import './Grid.scss'

const Grid = (props) => {
    const {
        column = 2,
        children,
    } = props
    return (
        <section className="edge container">
            <h2 className="edge__title">Наши преимущества</h2>
            <ul
                className={classNames('grid', {
                    [`grid--${column}`]: column > 1,
                })}
            >
                {children.map((child, index) => (
                    <li
                        className="grid__item"
                        key={index}
                    >
                        {child}
                    </li>
                ))}
            </ul>


        </section>
    )
}

export default Grid