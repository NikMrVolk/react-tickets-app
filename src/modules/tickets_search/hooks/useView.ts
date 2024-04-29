import { useEffect, useState } from 'react'

import { tickets } from '../constants'
import { FlightTicket } from '../types'

import { useStops } from './filters/useStops'
import { useToggle } from './filters/useToggle'

export const useView = () => {
    const [data, setData] = useState<FlightTicket[]>([])
    const { toggleStates, changeToggle } = useToggle()
    const { stops, checkedStops, turnStop, turnOnlyOneStop } = useStops(data)

    useEffect(() => {
        setData([...tickets].sort((a, b) => a.price - b.price))
    }, [])

    return {
        state: {
            tickets: data,
            checkedStops,
            stops,
            toggleStates,
        },
        functions: {
            changeToggle,
            turnStop,
            turnOnlyOneStop,
        },
    }
}
