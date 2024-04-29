import { useMemo } from 'react'

import { STOP_DEFAULT } from '../../constants'
import { FlightTicket, PriceOrderValue, StopValue } from '../../types'

const useSortedTicketsByPrice = (tickets: FlightTicket[], sort: PriceOrderValue) => {
    const sortedTicketsByPrice = useMemo(() => {
        if (sort === 'По возрастанию') {
            return [...tickets].sort((a, b) => a.price - b.price)
        }
        if (sort === 'По убыванию') {
            return [...tickets].sort((a, b) => b.price - a.price)
        }
        return tickets
    }, [tickets, sort])

    return sortedTicketsByPrice
}

export const useFilter = (tickets: FlightTicket[], sort: PriceOrderValue, checkedStops: StopValue[]) => {
    const sortedTicketsByPrice = useSortedTicketsByPrice(tickets, sort)

    const sortedAndSearchedTickets = useMemo(
        () =>
            sortedTicketsByPrice.filter(
                ticket => checkedStops.includes(ticket.stops) || checkedStops.includes(STOP_DEFAULT),
            ),
        [sortedTicketsByPrice, checkedStops],
    )

    return sortedAndSearchedTickets
}
