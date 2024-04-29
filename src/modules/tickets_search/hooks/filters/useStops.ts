import { useEffect, useState } from 'react'

import { STOP_DEFAULT } from '../../constants'
import { getUniqueValues } from '../../helpers'
import { FlightTicket, StopValue } from '../../types'

export const useStops = (tickets: FlightTicket[]) => {
    const [stops, setStops] = useState<StopValue[]>([])
    const [checkedStops, setCheckedStops] = useState<StopValue[]>([])

    const handleTurnStop = (stop: StopValue) => {
        if (checkedStops.includes(stop)) {
            // prevent turn off last element
            if (checkedStops.length === 1 && checkedStops[0] === stop) {
                setCheckedStops([STOP_DEFAULT])
            } else {
                setCheckedStops(checkedStops.filter(el => el !== stop))
            }
        } else {
            setCheckedStops([...checkedStops, stop].filter(el => el !== STOP_DEFAULT))
        }
    }

    const handleTurnOnlyOneStop = (stop: StopValue): void => {
        setCheckedStops([stop])
    }

    useEffect(() => {
        if (tickets.length) {
            setStops([STOP_DEFAULT, ...getUniqueValues(tickets, 'stops')])
            setCheckedStops([STOP_DEFAULT])
        }
    }, [tickets])

    return {
        stopStates: {
            stops,
            checkedStops,
        },
        stopFns: {
            turnStop: handleTurnStop,
            turnOnlyOneStop: handleTurnOnlyOneStop,
        },
    }
}
