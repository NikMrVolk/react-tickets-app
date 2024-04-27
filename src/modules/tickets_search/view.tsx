import { TicketsList } from './components/TicketsList'
import { useView } from './hooks'

export const TicketsSearch = () => {
    const {
        state: { tickets },
    } = useView()

    return (
        <>
            <TicketsList tickets={tickets} />
        </>
    )
}
