import moment from 'moment'

import { cn } from '../../../../utils/libs'

interface TimePointProps {
    time: string
    date: string
    source: string
    sourceName: string
    isSourceFirst?: boolean
}

export default function TimePoint({ time, date, source, sourceName, isSourceFirst = false }: TimePointProps) {
    return (
        <div className="flex flex-col gap-1">
            <p className={cn('text-4xl', !isSourceFirst && 'self-end')}>{time}</p>
            <p>{isSourceFirst ? `${source}, ${sourceName}` : `${sourceName}, ${source}`}</p>
            <p className="opacity-50">{moment(date, 'DD.MM.YYYY').format('D MMM YYYY, ddd')}</p>
        </div>
    )
}
