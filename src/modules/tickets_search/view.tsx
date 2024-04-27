import { Dashboard } from '../../components/UI'

import { TicketsList } from './components'
import { useView } from './hooks'

export const TicketsSearch = () => {
    const {
        state: { tickets },
    } = useView()

    return (
        <div className="grid grid-cols-ticketsSearch gap-16">
            <Dashboard className="h-fit">filter</Dashboard>
            <TicketsList tickets={tickets} />
        </div>
    )
}
