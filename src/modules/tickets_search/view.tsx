import { Dashboard } from '../../components/UI'

import CurrencyToggle from './components/filter/CurrencyToggle'
import FilterWrapperElement from './components/filter/FilterWrapperElement'
import { TicketsList } from './components/tickets'
import { useView } from './hooks'

export const TicketsSearch = () => {
    const {
        state: { tickets, currentCurrency },
        functions: { changeCurrentCurrency },
    } = useView()

    return (
        <div className="grid grid-cols-ticketsSearch gap-16">
            <Dashboard className="h-fit">
                <FilterWrapperElement title="ВАЛЮТА">
                    <CurrencyToggle currentCurrency={currentCurrency} changeCurrency={changeCurrentCurrency} />
                </FilterWrapperElement>
            </Dashboard>
            <TicketsList tickets={tickets} />
        </div>
    )
}
