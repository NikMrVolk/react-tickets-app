import { Dashboard } from '../../../../components/UI'
import { TICKETS_CURRENCIES, TICKETS_PRICE_ORDERS } from '../../constants'
import { Currency, PriceOrderValue, StopValue, ToggleElementsKeys } from '../../types'

import { CheckElement } from './checkbox'
import FilterWrapperElement from './FilterWrapperElement'
import ToggleButtons from './ToggleButtons'

interface FiltersProps {
    toggleStates: {
        currency: Currency
        price: PriceOrderValue
    }
    stops: StopValue[]
    checkedStops: StopValue[]
    turnStop: (stop: StopValue) => void
    turnOnlyOneStop: (stop: StopValue) => void
    changeToggle: <T>(currency: T, key: ToggleElementsKeys) => void
    children?: React.ReactNode
}

export default function Filters({
    toggleStates,
    changeToggle,
    stops,
    checkedStops,
    turnStop,
    turnOnlyOneStop,
}: FiltersProps) {
    return (
        <Dashboard className="flex h-fit flex-col gap-10">
            <FilterWrapperElement title="ВАЛЮТА">
                <ToggleButtons
                    elements={TICKETS_CURRENCIES}
                    currentValue={toggleStates.currency}
                    changeValue={changeToggle}
                    changeValueKey="currency"
                />
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
            <FilterWrapperElement title="ЦЕНА">
                <ToggleButtons
                    elements={TICKETS_PRICE_ORDERS}
                    currentValue={toggleStates.price}
                    changeValue={changeToggle}
                    changeValueKey="price"
                />
            </FilterWrapperElement>
        </Dashboard>
    )
}
