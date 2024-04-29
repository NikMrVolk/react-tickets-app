import Filters from './components/filter/Filters'
import { TicketsList } from './components/tickets'
import { useView } from './hooks'

export const TicketsSearch = () => {
    const {
        state: { tickets, stops, checkedStops, toggleStates },
        functions: { turnStop, turnOnlyOneStop, changeToggle },
    } = useView()

    return (
        <div className="grid grid-cols-ticketsSearch gap-16">
            <Filters
                toggleStates={toggleStates}
                changeToggle={changeToggle}
                stops={stops}
                checkedStops={checkedStops}
                turnStop={turnStop}
                turnOnlyOneStop={turnOnlyOneStop}
            />
            <TicketsList tickets={tickets} />
        </div>
    )
}
