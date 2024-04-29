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
    changeToggle: <T>(currency: T, key: ToggleElementsKeys) => void
    stopStates: {
        stops: StopValue[]
        checkedStops: StopValue[]
    }
    stopFns: {
        turnStop: (stop: StopValue) => void
        turnOnlyOneStop: (stop: StopValue) => void
    }
    children?: React.ReactNode
}

export default function Filters({ toggleStates, changeToggle, stopStates, stopFns }: FiltersProps) {
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
                {stopStates.stops.map(el => (
                    <CheckElement
                        key={el}
                        value={el}
                        isChecked={stopStates.checkedStops.includes(el)}
                        turnStop={stopFns.turnStop}
                        turnOnlyOneStop={stopFns.turnOnlyOneStop}
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
