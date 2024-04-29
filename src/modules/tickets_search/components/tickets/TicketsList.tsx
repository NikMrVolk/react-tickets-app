import { FlightTicketWithFormattedPrice } from '../../types'

import TicketElement from './TicketElement'

interface TicketsListProps {
    tickets: FlightTicketWithFormattedPrice[]
}

export const TicketsList = ({ tickets }: TicketsListProps) => (
    <ul className="flex flex-col gap-6">
        {tickets?.length ? (
            tickets?.map((el, index) => <TicketElement key={index + el.origin} ticket={el} />)
        ) : (
            <div className="text-center">Ничего не найдено</div>
        )}
    </ul>
)
