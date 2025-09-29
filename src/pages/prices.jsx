import Button from '@/components/Button'
//import Modal from '@/components/Modal'

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
                                <td className='hidden-mobile'>
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
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>
                                        Габаритные кусковые лом и отходы, удобные для загрузки плавильных агрегатов.
                                        Не допускаются проволока и изделия из проволоки.
                                        Размеры куска должны быть не более 800х500х500 мм.
                                        Остальные требования согласно ГОСТ 2787-75.
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>16000</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>5А</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>
                                        Негабаритные кусковые лом и отходы.
                                        Не допускаются проволока и изделия из проволоки. Толщина металла должна быть не менее 6 мм.
                                        Остальные требования согласно ГОСТ 2787-75.
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>15000</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>12А</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>
                                        Стальные, листовые, полосовые и сортовые отходы, кровля, легковесный промышленный и бытовой лом, проволока и изделия из нее, металлоконструкции, трубы.
                                        Стальные канаты не допускаются. Толщина металла должна быть менее 6 мм. Максимальные линейные размеры не должны превышать 3500х2500х1000 мм.
                                        Остальные требования согласно ГОСТ 2787-75.
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>12000</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>22А</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>
                                        Чугунные отливки с повышенным и высоким содержанием фосфора (печные, посудные, художественные). Отливки из ковкого чугуна, чугунные трубы.
                                        Размеры не регламентируются.
                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>12000</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>Копанка</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>

                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>12000</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Черный Металл</span></td>
                                <td><span className='prices__composition'>Скраб</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>

                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>6500</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                <td><span className='prices__composition'>Медь Блеск</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>

                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>780</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                <td><span className='prices__composition'>Медь микс</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>

                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>750</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                <td><span className='prices__composition'>Медь лужёная</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>

                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>685</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                <td><span className='prices__composition'>Медь стружка</span></td>
                                <td className='hidden-mobile'>
                                    <p className='prices__description'>

                                    </p>
                                </td>
                                <td>
                                    <p className='prices__price'>695</p>
                                </td>
                                <tr>
                                    <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                    <td><span className='prices__composition'>Латунь</span></td>
                                    <td className='hidden-mobile'>
                                        <p className='prices__description'>

                                        </p>
                                    </td>
                                    <td>
                                        <p className='prices__price'>460</p>
                                    </td>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Латунь стружка</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>350</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Латунь радиаторы</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>425</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Алюминий</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>120</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Алюминий первичка</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>175</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Алюминий стружка</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>35</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Алюминий (радиатор)</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>50</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>АКБ (полипропилен) </span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>45</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>АКБ (эбонит)</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>35</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Свинец (груза)</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>80</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Свинец (листовой)</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>120</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Нержавейка</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>50</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Магний</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>65</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Цинк</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>150</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Титан</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>190</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Цветной Металл</span></td>
                                        <td><span className='prices__composition'>Электродвигатели</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>60</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='hidden-tablet hidden-mobile'><span className='prices-category'>Остальное</span></td>
                                        <td><span className='prices__composition'>А также действуют спец цены, согласовываются индивидуально.</span></td>
                                        <td className='hidden-mobile'>
                                            <p className='prices__description'>

                                            </p>
                                        </td>
                                        <td>
                                            <p className='prices__price'>Цена не указана</p>
                                        </td>
                                    </tr>
                                </tr>
                            </tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                    <p><strong><span>При объеме&nbsp;свыше&nbsp;1&nbsp;тонны&nbsp;действует спеццена.</span></strong></p>
                    <p>&nbsp;</p>
                </div>
                {/*
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
                */}
            </div >

        </>
    )
}