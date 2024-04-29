import { Button, Dashboard } from '../../../../components/UI'
import { morphRuEndings } from '../../../../utils/helpers'
import { FlightTicketWithFormattedPrice } from '../../types'

import TimePoint from './TimePoint'

export default function TicketElement({ ticket }: { ticket: FlightTicketWithFormattedPrice }) {
    return (
        <li className="grid grid-cols-ticketElement gap-0.25">
            <Dashboard Component="div" className="flex flex-col items-center gap-4 rounded-r-none">
                <img src="/images/TALogo.png" alt="Turkish Airlines" draggable="false" />
                <Button className="max-w-48">
                    Купить <br />
                    за <span className="text-xl">{ticket.price}</span>
                </Button>
            </Dashboard>
            <Dashboard Component="div" className="relative flex justify-between rounded-l-none">
                <TimePoint
                    time={ticket.departure_time}
                    date={ticket.departure_date}
                    source={ticket.origin}
                    sourceName={ticket.origin_name}
                    isSourceFirst
                />
                <TimePoint
                    time={ticket.arrival_time}
                    date={ticket.arrival_date}
                    source={ticket.destination}
                    sourceName={ticket.destination_name}
                />
                <div className="absolute left-[40%] top-auto flex flex-col gap-2">
                    <div className="px-4 text-sm text-ticket-plane-line">
                        {`${ticket.stops} ${morphRuEndings(ticket.stops, 'ОСТАНОВ', ['КА', 'КИ', 'ОК'])}`}
                    </div>
                    <div className="flex items-center gap-0.5">
                        <div className="h-0.25 basis-full bg-ticket-plane-line" />
                        <img src="/images/plane.png" alt="plane" className="h-6 w-6" />
                    </div>
                </div>
            </Dashboard>
        </li>
    )
}
