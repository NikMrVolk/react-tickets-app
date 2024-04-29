import { Button } from '../../../../components/UI'
import { cn } from '../../../../utils/libs'

interface ToggleButtonsProps<T> {
    elements: T[]
    currentValue: T
    changeValue: (value: T) => void
}

export default function ToggleButtons<T extends string | number>({
    elements,
    currentValue,
    changeValue,
}: ToggleButtonsProps<T>) {
    return (
        <div className="flex">
            {elements.map((el, index) => (
                <Button
                    key={el}
                    variant="blue"
                    onClick={() => changeValue(el)}
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
