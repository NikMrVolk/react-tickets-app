import { useEffect, useState } from 'react'

import { tickets } from '../constants'
import { FlightTicket } from '../types'

import { useFilter, useStops, useToggle } from './filters'
import { useCurrency } from './useCurrency'

export const useView = () => {
    const [data, setData] = useState<FlightTicket[]>([])
    const { toggleStates, changeToggle } = useToggle()
    const { stopStates, stopFns } = useStops(data)
    const sortedAndSearchedTickets = useFilter(data, toggleStates.price, stopStates.checkedStops)
    const ticketsWithCurrency = useCurrency(sortedAndSearchedTickets, toggleStates.currency)

    useEffect(() => {
        setData(tickets)
    }, [])

    return {
        state: {
            tickets: ticketsWithCurrency,
            toggleStates,
            stopStates,
        },
        functions: {
            changeToggle,
            stopFns,
        },
    }
}
