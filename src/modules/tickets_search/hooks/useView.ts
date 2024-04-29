import { useEffect, useState } from 'react'

import { STOP_DEFAULT, tickets, TICKETS_CURRENCIES } from '../constants'
import { getUniqueValues } from '../helpers'
import { Currency, FlightTicket, StopValue } from '../types'

export const useView = () => {
    const [data, setData] = useState<FlightTicket[]>([])
    const [currentCurrency, setCurrentCurrency] = useState<Currency>(TICKETS_CURRENCIES[0])
    const [stops, setStops] = useState<StopValue[]>([])
    const [checkedStops, setCheckedStops] = useState<StopValue[]>([])

    const handleChangeCurrentCurrency = (currency: Currency) => {
        setCurrentCurrency(currency)
    }

    const handleTurnStop = (stop: StopValue) => {
        if (checkedStops.includes(stop)) {
            // prevent turn off last element
            if (checkedStops.length === 1 && checkedStops[0] === stop) {
                setCheckedStops([STOP_DEFAULT])
            } else {
                setCheckedStops(checkedStops.filter(el => el !== stop))
            }
        } else {
            setCheckedStops([...checkedStops, stop].filter(el => el !== STOP_DEFAULT))
        }
    }

    const handleTurnOnlyOneStop = (stop: StopValue): void => {
        setCheckedStops([stop])
    }

    useEffect(() => {
        setData([...tickets].sort((a, b) => a.price - b.price))
    }, [])

    useEffect(() => {
        if (data.length) {
            setStops([STOP_DEFAULT, ...getUniqueValues(data, 'stops')])
            setCheckedStops([STOP_DEFAULT])
        }
    }, [data])

    return {
        state: {
            tickets: data,
            currentCurrency,
            checkedStops,
            stops,
        },
        functions: {
            changeCurrentCurrency: handleChangeCurrentCurrency,
            turnStop: handleTurnStop,
            turnOnlyOneStop: handleTurnOnlyOneStop,
        },
    }
}
