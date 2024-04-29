import Filters from './components/filter/Filters'
import { TicketsList } from './components/tickets'
import { useView } from './hooks'

export const TicketsSearch = () => {
    const {
        state: { tickets, toggleStates, stopStates },
        functions: { changeToggle, stopFns },
    } = useView()

    return (
        <div className="grid grid-cols-ticketsSearch gap-16">
            <Filters
                toggleStates={toggleStates}
                changeToggle={changeToggle}
                stopStates={stopStates}
                stopFns={stopFns}
            />
            <TicketsList tickets={tickets} />
        </div>
    )
}
