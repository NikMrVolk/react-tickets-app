import Filters from './components/filter/Filters'
import { TicketsList } from './components/tickets'
import { useView } from './hooks'

export const TicketsSearch = () => {
    const {
        state: { tickets, currentCurrency, stops },
        functions: { changeCurrentCurrency },
    } = useView()

    return (
        <div className="grid grid-cols-ticketsSearch gap-16">
            <Filters currentCurrency={currentCurrency} changeCurrentCurrency={changeCurrentCurrency} stops={stops} />
            <TicketsList tickets={tickets} />
        </div>
    )
}
