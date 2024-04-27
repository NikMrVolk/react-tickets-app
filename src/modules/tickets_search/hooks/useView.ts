import { useState } from 'react'

import { tickets } from '../constants'
import { FlightTicket } from '../types'

export const useView = () => {
    const [data, setData] = useState<FlightTicket[]>([...tickets].sort((a, b) => a.price - b.price))

    const handleFilterTickets = () => {
        setData(tickets)
    }

    return {
        state: {
            tickets: data,
        },
        functions: {
            filterTickets: handleFilterTickets,
        },
    }
}
