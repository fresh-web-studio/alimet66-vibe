import './Logo.scss'
import classNames from 'classnames'
import logoImgSrc from '@/assets/images/logo.svg'

const Logo = (props) => {
    const {
        className,
        loading = 'lazy',
    } = props

    const title = 'Home'
    return (
        <a
            className={classNames(className, 'logo')}
            href="/"
            title={title}
            aria-label={title} >
            <img
                className="logo__image"
                src={logoImgSrc}
                alt=""
                width={400}
                height={100}
                loading={loading}
            />
        </a >
    )
}

export default Logo