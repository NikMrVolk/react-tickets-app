import { FlightTicket } from '../types'

interface TicketsListProps {
    tickets?: FlightTicket[]
}

export const TicketsList = ({ tickets }: TicketsListProps) => (
    <ul className="flex flex-col gap-6">{tickets?.map((el, index) => <li key={index + el.origin}>123</li>)}</ul>
)
