import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import classNames from 'classnames'

const Field = (props) => {
    const {
        className,
        id = getIdFromTitle(props.label),
        label,
        name,
        value,
        type,
        placeholder,
        isRequired,
        inputMode,
        mask,
    } = props

    const Component = type === 'textarea'
        ? 'textarea'
        : 'input'

    const extraAttrs = {}

    if (mask) {
        extraAttrs['data-js-input-mask'] = mask
    }

    return (
        <div className={classNames(className, 'field')}>
            <label
                className="field__label visually-hidden"
                htmlFor={id}
            >
                {label} {isRequired && (
                    <span
                        className="field__required-star"
                        aria-hidden="true"
                    >*</span>
                )}
            </label>
            <div className="field__label">
                <Component
                    className='field__control'
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={value}
                    required={isRequired}
                    inputMode={inputMode}
                    {...extraAttrs}
                />
            </div>

        </div>
    )
}

export default Field