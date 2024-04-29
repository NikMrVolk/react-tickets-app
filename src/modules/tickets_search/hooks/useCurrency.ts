/* eslint-disable indent */
import { useMemo } from 'react'

import { CURRENCY_COEFFICIENTS } from '../constants'
import { exhaustiveCheck } from '../helpers'
import { Currency, FlightTicket, FlightTicketWithFormattedPrice } from '../types'

const formattingPrice = (price: number, currency: Currency) =>
    Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(price)

const calculateAndFormatPrice = (tickets: FlightTicket[], currency: Currency, currencyCoefficient: number) =>
    tickets.map(el => ({
        ...el,
        price: formattingPrice(el.price / currencyCoefficient, currency),
    }))

export const useCurrency = (tickets: FlightTicket[], currency: Currency) => {
    const ticketsWithCurrency = useMemo(() => {
        switch (currency) {
            case 'RUB':
                return calculateAndFormatPrice(tickets, currency, CURRENCY_COEFFICIENTS[0])
            case 'USD':
                return calculateAndFormatPrice(tickets, currency, CURRENCY_COEFFICIENTS[1])
            case 'EUR':
                return calculateAndFormatPrice(tickets, currency, CURRENCY_COEFFICIENTS[2])
            default:
                exhaustiveCheck(currency)
                return tickets
        }
    }, [tickets, currency])

    return ticketsWithCurrency as FlightTicketWithFormattedPrice[]
}
