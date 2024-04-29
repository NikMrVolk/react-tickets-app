import { STOP_DEFAULT } from '../constants'

export interface FlightTicket {
    origin: string
    origin_name: string
    destination: string
    destination_name: string
    departure_date: string
    departure_time: string
    arrival_date: string
    arrival_time: string
    carrier: string
    stops: number
    price: number
}

export type Currency = 'RUB' | 'USD' | 'EUR'
export type StopValue = FlightTicket['stops'] | typeof STOP_DEFAULT
export type PriceOrderValue = 'По возрастанию' | 'По убыванию'

export type ToggleElementsKeys = 'currency' | 'price'
