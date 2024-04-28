import { Dashboard } from '../../components/UI'

import CurrencyToggle from './components/filter/CurrencyToggle'
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
                <div className="flex flex-col gap-4">
                    <p>ВАЛЮТА</p>
                    <CurrencyToggle currentCurrency={currentCurrency} changeCurrency={changeCurrentCurrency} />
                </div>
            </Dashboard>
            <TicketsList tickets={tickets} />
        </div>
    )
}
