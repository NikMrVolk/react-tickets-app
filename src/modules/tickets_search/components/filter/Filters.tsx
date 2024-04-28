import { Dashboard } from '../../../../components/UI'
import { Currency } from '../../types'

import CurrencyToggle from './CurrencyToggle'
import FilterWrapperElement from './FilterWrapperElement'

interface FiltersProps {
    currentCurrency: Currency
    changeCurrentCurrency: (currency: Currency) => void
    children?: React.ReactNode
}

export default function Filters({ currentCurrency, changeCurrentCurrency }: FiltersProps) {
    return (
        <Dashboard className="flex h-fit flex-col gap-10">
            <FilterWrapperElement title="ВАЛЮТА">
                <CurrencyToggle currentCurrency={currentCurrency} changeCurrency={changeCurrentCurrency} />
            </FilterWrapperElement>
        </Dashboard>
    )
}
