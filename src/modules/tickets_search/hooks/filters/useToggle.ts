/* eslint-disable indent */
import { useState } from 'react'

import { TICKETS_CURRENCIES, TICKETS_PRICE_ORDERS } from '../../constants'
import { exhaustiveCheck } from '../../helpers'
import { Currency, PriceOrderValue, ToggleElementsKeys } from '../../types'

export const useToggle = () => {
    const [currency, setCurrency] = useState<Currency>(TICKETS_CURRENCIES[0])
    const [price, setPrice] = useState<PriceOrderValue>(TICKETS_PRICE_ORDERS[0])

    function handleChangeToggle<T>(value: T, key: ToggleElementsKeys) {
        switch (key) {
            case 'currency':
                setCurrency(value as Currency)
                break
            case 'price':
                setPrice(value as PriceOrderValue)
                break

            default:
                exhaustiveCheck(key)
                break
        }
    }

    return {
        toggleStates: { currency, price },
        changeToggle: handleChangeToggle,
    }
}
