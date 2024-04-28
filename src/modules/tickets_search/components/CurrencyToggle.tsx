import { Button } from '../../../components/UI'
import { cn } from '../../../utils/libs'
import { TICKETS_CURRENCIES } from '../constants'
import { Currency } from '../types'

interface CurrencyToggleProps {
    currentCurrency: Currency
    changeCurrency: (currency: Currency) => void
}

export default function CurrencyToggle({ currentCurrency: currency, changeCurrency }: CurrencyToggleProps) {
    return (
        <div className="flex">
            {TICKETS_CURRENCIES.map((el, index) => (
                <Button
                    key={el}
                    variant="blue"
                    onClick={() => changeCurrency(el)}
                    className={cn(el === currency && 'border-blue bg-blue text-white enabled:hover:bg-blue', {
                        'rounded-r-md': index === TICKETS_CURRENCIES.length - 1,
                        'rounded-l-md': index === 0,
                    })}
                >
                    {el}
                </Button>
            ))}
        </div>
    )
}
