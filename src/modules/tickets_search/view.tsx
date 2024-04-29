import Filters from './components/filter/Filters'
import { TicketsList } from './components/tickets'
import { useView } from './hooks'

export const TicketsSearch = () => {
    const {
        state: { tickets, currency, stops, checkedStops },
        functions: { changeCurrency, turnStop, turnOnlyOneStop },
    } = useView()

    return (
        <div className="grid grid-cols-ticketsSearch gap-16">
            <Filters
                currency={currency}
                changeCurrency={changeCurrency}
                stops={stops}
                checkedStops={checkedStops}
                turnStop={turnStop}
                turnOnlyOneStop={turnOnlyOneStop}
            />
            <TicketsList tickets={tickets} />
        </div>
    )
}
