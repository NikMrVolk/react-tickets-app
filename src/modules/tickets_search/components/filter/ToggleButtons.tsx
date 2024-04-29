import { Button } from '../../../../components/UI'
import { cn } from '../../../../utils/libs'
import { ToggleElementsKeys } from '../../types'

interface ToggleButtonsProps<T> {
    elements: T[]
    currentValue: T
    changeValue: (value: T, key: ToggleElementsKeys) => void
    changeValueKey: ToggleElementsKeys
}

export default function ToggleButtons<T extends string | number>({
    elements,
    currentValue,
    changeValue,
    changeValueKey,
}: ToggleButtonsProps<T>) {
    return (
        <div className="flex">
            {elements.map((el, index) => (
                <Button
                    key={el}
                    variant="blue"
                    onClick={() => changeValue(el, changeValueKey)}
                    className={cn(el === currentValue && 'border-blue bg-blue text-white enabled:hover:bg-blue', {
                        'rounded-r-md': index === elements.length - 1,
                        'rounded-l-md': index === 0,
                    })}
                >
                    {el}
                </Button>
            ))}
        </div>
    )
}
