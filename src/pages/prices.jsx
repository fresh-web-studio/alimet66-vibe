import Button from '@/components/Button'
import Modal from '@/components/Modal'

export const metadata = {
    title: 'Цены - ',
}

export default () => {
    return (
        <>
            <div className="container non-home-page">
                <h1>Цены</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'>
                                    <span><strong>Категория</strong></span>
                                </td>
                                <td>
                                    <p><strong className='hidden-tablet hidden-mobile'>Наименование</strong><strong className='visible-tablet'>Имя</strong></p>
                                </td>
                                <td>
                                    <p><strong>Состав</strong></p>
                                </td>
                                <td>
                                    <p><strong><span>Цена (за тонну)</span></strong></p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>3А</span></td>
                                <td>
                                    <p className='prices__description'>
                                        <span>Габаритные кусковые лом и отходы, удобные для загрузки плавильных агрегатов. </span>
                                        <span>Не допускаются проволока и изделия из проволоки.&nbsp;</span>
                                        <span>Размеры куска должны быть не более 800х500х500 мм. </span>
                                        <span>Остальные требования согласно ГОСТ&nbsp;2787-75.</span>
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>15500</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>5А</span></td>
                                <td>
                                    <p className='prices__description'>
                                        <span>Негабаритные кусковые лом и отходы.</span>
                                        <span>Не допускаются проволока и изделия из проволоки.&nbsp;Толщина металла должна быть не менее 6 мм.</span>
                                        <span>Остальные требования согласно ГОСТ&nbsp;2787-75.</span>
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>14500</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>12А</span></td>
                                <td>
                                    <p className='prices__description'>
                                        <span>Стальные, листовые, полосовые и сортовые отходы, кровля, легковесный промышленный и бытовой лом, проволока и изделия из нее, металлоконструкции, трубы.</span>
                                        <span>Стальные канаты не допускаются.&nbsp;Толщина металла должна быть менее 6 мм. Максимальные линейные размеры не должны превышать 3500х2500х1000 мм.</span>
                                        <span>Остальные требования согласно ГОСТ&nbsp;2787-75.</span>
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>14500</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>22А</span></td>
                                <td>
                                    <p className='prices__description'>
                                        <span>Чугунные отливки с повышенным и высоким содержанием фосфора (печные, посудные, художественные). Отливки из ковкого чугуна, чугунные трубы. </span>
                                        <span>Размеры не регламентируются.&nbsp;</span>
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>14400</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                    <p><strong><span>При объеме&nbsp;свыше&nbsp;1&nbsp;тонны&nbsp;действует спеццена.</span></strong></p>
                    <p>&nbsp;</p>
                </div>

                <Button
                    className="mail__button"
                    id="show-dialog-btn"
                    type="button"
                    onClick="modalMore.showModal"
                    label="Узнать больше"
                    extraAttrs={{
                        'data-js-modal-more-button': '',
                    }}
                />
            </div >

        </>
    )
}