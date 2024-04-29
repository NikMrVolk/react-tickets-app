import { Dashboard } from '../../../../components/UI'
import { TICKETS_CURRENCIES } from '../../constants'
import { Currency, StopValue } from '../../types'

import { CheckElement } from './checkbox'
import FilterWrapperElement from './FilterWrapperElement'
import CurrencyToggle from './ToggleButtons'

interface FiltersProps {
    stops: StopValue[]
    checkedStops: StopValue[]
    turnStop: (stop: StopValue) => void
    turnOnlyOneStop: (stop: StopValue) => void
    currency: Currency
    changeCurrency: (currency: Currency) => void
    children?: React.ReactNode
}

export default function Filters({
    currency,
    changeCurrency,
    stops,
    checkedStops,
    turnStop,
    turnOnlyOneStop,
}: FiltersProps) {
    return (
        <Dashboard className="flex h-fit flex-col gap-10">
            <FilterWrapperElement title="ВАЛЮТА">
                <CurrencyToggle elements={TICKETS_CURRENCIES} currentValue={currency} changeValue={changeCurrency} />
            </FilterWrapperElement>
            <FilterWrapperElement title="КОЛИЧЕСТВО ПЕРЕСАДОК">
                {stops.map(el => (
                    <CheckElement
                        key={el}
                        value={el}
                        isChecked={checkedStops.includes(el)}
                        turnStop={turnStop}
                        turnOnlyOneStop={turnOnlyOneStop}
                    />
                ))}
            </FilterWrapperElement>
        </Dashboard>
    )
}
