import ServicesCard from '@/components/ServicesCard'
import './Services.scss'

const Services = () => {

    const servicesItems = [
        {
            title: 'Прием лома черных металлов',
            images: [
                '/src/assets/images/services/lom1.jpg',
            ],
            url: '/services/priem-loma-chernyh-metallov',
            description: 'Вы можете нам сдать: габаритный и негабаритный чугун, а также бытовой с содержанием фосфора; сталь: жесть, стружку, в том числе автомобили.'
        },
        {
            title: 'Прием лома цветных металлов',
            images: [
                '/src/assets/images/services/lom2.jpg',
            ],
            url: '/services/priem-loma-cvetnyh-metallov',
            description: 'Наши собственные пункты приёма, лаборатория экспресс-анализа и техника оперативно осуществляют закупку металла любого объёма.'
        },
        {
            title: 'Демонтаж металлолома',
            images: [
                '/src/assets/images/services/demont.jpg',
            ],
            url: '/services/demontazh-metalloloma',
            description: 'Профессионально выполняем оперативный и качественный демонтаж любых видов металлоконструкций, соблюдая технологию и сроки.'
        },
        {
            title: 'Погрузка и вывоз металлолома',
            images: [
                '/src/assets/images/services/pogruz.jpg',
            ],
            url: '/services/pogruzka-i-vyvoz-metalloloma',
            description: 'Наше предприятие располагает собственным обширным автопарком современной специализированной техники высокого качества.'
        },
    ]
    return (
        <section className="services">
            <div className="services__list container">
                {servicesItems.map((servicesItem, index) => (
                    <ServicesCard
                        {...servicesItem}
                        key={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default Services