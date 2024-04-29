import { Dashboard } from '../../../../components/UI'
import { Currency, StopValue } from '../../types'

import { CheckElement } from './checkbox'
import CurrencyToggle from './CurrencyToggle'
import FilterWrapperElement from './FilterWrapperElement'

interface FiltersProps {
    stops: StopValue[]
    currentCurrency: Currency
    changeCurrentCurrency: (currency: Currency) => void
    children?: React.ReactNode
}

export default function Filters({ currentCurrency, changeCurrentCurrency, stops }: FiltersProps) {
    return (
        <Dashboard className="flex h-fit flex-col gap-10">
            <FilterWrapperElement title="ВАЛЮТА">
                <CurrencyToggle currentCurrency={currentCurrency} changeCurrency={changeCurrentCurrency} />
            </FilterWrapperElement>
            <FilterWrapperElement title="КОЛИЧЕСТВО ПЕРЕСАДОК">
                {stops.map(el => (
                    <CheckElement key={el} value={el} />
                ))}
            </FilterWrapperElement>
        </Dashboard>
    )
}
