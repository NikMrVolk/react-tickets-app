import { useState } from 'react'

import { tickets, TICKETS_CURRENCIES } from '../constants'
import { Currency, FlightTicket } from '../types'

export const useView = () => {
    const [data, setData] = useState<FlightTicket[]>([...tickets].sort((a, b) => a.price - b.price))
    const [currentCurrency, setCurrentCurrency] = useState<Currency>(TICKETS_CURRENCIES[0])

    // todo add filter
    const handleFilterTickets = () => {
        setData(tickets)
    }

    const handleChangeCurrentCurrency = (currency: Currency) => {
        setCurrentCurrency(currency)
    }

    return {
        state: {
            tickets: data,
            currentCurrency,
        },
        functions: {
            filterTickets: handleFilterTickets,
            changeCurrentCurrency: handleChangeCurrentCurrency,
        },
    }
}
