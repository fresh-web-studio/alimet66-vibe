import './Edge.scss'
import Grid from '@/components/Grid'
import EdgeCard from '@/components/EdgeCard'

const Edge = (props) => {

    const edgeItems = [
        {
            number: '1',
            title: 'Оплата сразу на месте',
        },
        {
            number: '2',
            title: 'Покупаем максимально дорого (Работаем с НДС)',
        },
        {
            number: '3',
            title: 'Точное взвешивание на электронных весах',
        },
        {
            number: '4',
            title: 'Сами демонтируем, загрузим и увезем',
        }
    ]

    return (
        <Grid columns={2}>
            {edgeItems.map((edgeItem, index) => (
                <EdgeCard {...edgeItem} key={index} />
            ))}
        </Grid>
    )
}

export default Edge