import { useEffect, useState } from 'react'

import { tickets, TICKETS_CURRENCIES } from '../constants'
import { Currency, FlightTicket } from '../types'

import { useStops } from './filters/useStops'

export const useView = () => {
    const [data, setData] = useState<FlightTicket[]>([])
    const [currency, setCurrency] = useState<Currency>(TICKETS_CURRENCIES[0])
    const { stops, checkedStops, turnStop, turnOnlyOneStop } = useStops(data)

    const handleChangeCurrency = (currency: Currency) => {
        setCurrency(currency)
    }

    useEffect(() => {
        setData([...tickets].sort((a, b) => a.price - b.price))
    }, [])

    return {
        state: {
            tickets: data,
            currency,
            checkedStops,
            stops,
        },
        functions: {
            changeCurrency: handleChangeCurrency,
            turnStop,
            turnOnlyOneStop,
        },
    }
}
