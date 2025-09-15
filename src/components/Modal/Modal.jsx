import './Modal.scss'
import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"
import iconClose from '@/assets/icons/close.svg'

const Modal = () => {

    return (
        <dialog
            className="fit-back__dialog"
            id="modalMore"
            data-js-modal-more-dialog=""
        >
            <div className="fit-back">
                <div className="fit-back__header">
                    <h2 className="fit-back__title">Узнать цену лома</h2>
                    <div className="fit-back__close">
                        <img src={iconClose} width="50" alt="close" data-js-modal-more-button-close />
                    </div>
                </div>

                <form
                    className="fit-back__form"
                    name="Модальное окно"
                    action="../PHPmailer/smart.php"
                    method="post"
                >
                    <Field
                        className="fit-back__form-cell"
                        label="Имя:"
                        placeholder="Имя*"
                        name="rm_name"
                        isRequired
                    />
                    <Field
                        className="fit-back__form-cell"
                        label="Телефон:"
                        placeholder="+7 (999) 999-99-99*"
                        type="tel"
                        inputMode="tel"
                        mask="+7 (000) 000-00-00"
                        name="rm_phone"
                        isRequired
                    />
                    <Field
                        className="fit-back__form-cell"
                        label="E-mail:"
                        placeholder="E-mail*"
                        type="email"
                        name="rm_mail"
                        isRequired
                    />
                    <Field
                        className="fit-back__form-cell fit-back__form-cell--wide"
                        label="Текст соощения:"
                        type="textarea"
                        placeholder="Текст*"
                        name="rm_text"
                        isRequired
                    />

                    <div className="fit-back__form-cell fit-back__form-cell--wide fit-back__form-cell--actions">
                        <Checkbox
                            className="fit-back__form-agreement"
                            label="Принимаю условия политики информационной безопасности"
                            isRequired
                        />
                    </div>
                    <Button
                        className="fit-back__form-submit-button"
                        label="Отправить"
                        type="submit"
                    />
                </form>
            </div>
        </dialog>
    )
}


export default Modal
