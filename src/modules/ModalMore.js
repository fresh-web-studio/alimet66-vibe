class ModalMore {

    selectors = {
        root: '[data-js-modal-more]',
        dialog: '[data-js-modal-more-dialog]',
        moreButton: '[data-js-modal-more-button]',
        moreButtonClose: '[data-js-modal-more-button-close]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
        this.moreButtonElement = this.rootElement.querySelector(this.selectors.moreButton)
        this.moreButtonCloseElement = this.rootElement.querySelector(this.selectors.moreButtonClose) // Добавляем определение элемента

        this.bindEvents()
    }

    onMoreButtonClick = () => {
        this.moreButtonElement.classList.toggle(this.stateClasses.isActive)
        this.dialogElement.open = !this.dialogElement.open
    }

    onMoreButtonCloseClick = () => {
        this.dialogElement.open = false // Закрываем диалог однозначно
    }

    bindEvents() {
        this.moreButtonElement.addEventListener('click', this.onMoreButtonClick)
        this.moreButtonCloseElement.addEventListener('click', this.onMoreButtonCloseClick)


    }
}

export default ModalMore