import { useEffect, useState } from 'react'

import { tickets, TICKETS_CURRENCIES } from '../constants'
import { getUniqueValues } from '../helpers'
import { Currency, FlightTicket, StopValue } from '../types'

export const useView = () => {
    const [data, setData] = useState<FlightTicket[]>([])
    const [currentCurrency, setCurrentCurrency] = useState<Currency>(TICKETS_CURRENCIES[0])
    const [stops, setStops] = useState<StopValue[]>([])

    // todo add filter
    const handleFilterTickets = () => {
        setData(tickets)
    }

    const handleChangeCurrentCurrency = (currency: Currency) => {
        setCurrentCurrency(currency)
    }

    useEffect(() => {
        setData([...tickets].sort((a, b) => a.price - b.price))
    }, [])

    useEffect(() => {
        if (data.length) {
            setStops(['all', ...getUniqueValues(data, 'stops')])
        }
    }, [data])

    return {
        state: {
            tickets: data,
            currentCurrency,
            stops,
        },
        functions: {
            filterTickets: handleFilterTickets,
            changeCurrentCurrency: handleChangeCurrentCurrency,
        },
    }
}
