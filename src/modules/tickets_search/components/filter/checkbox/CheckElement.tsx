import { useId } from 'react'

import { Input } from '../../../../../components/UI/Input'
import { morphRuEndings } from '../../../../../utils/helpers'
import { cn } from '../../../../../utils/libs'
import { StopValue } from '../../../types'

import { CheckedArrowSvg } from './CheckedArrowSvg'

interface CheckElementProps {
    value: StopValue
    className?: string
}

const checkStyle = `before:content[''] border-blue-gray-200 before:bg-blue-gray-500 checked:border-blue checked:bg-blue-hover checked:before:bg-blue-hover 
peer relative h-5 w-5 appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 
before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-0`

export const CheckElement = ({ className = '', value }: CheckElementProps) => {
    const id = useId()

    const valueToDisplay = () => {
        if (value !== 'all') {
            if (value === 0) {
                return 'Без пересадок'
            } else {
                return `${value} ${morphRuEndings(value, 'пересад', ['ка', 'ки', 'ок'])}`
            }
        }
        return `Все`
    }

    return (
        <label
            htmlFor={id}
            className={cn('group flex cursor-pointer items-center justify-between py-2 hover:bg-blue-hover', className)}
        >
            <div className="flex">
                <div className="peer mr-3 grid place-items-center">
                    <div className="relative flex cursor-pointer items-center rounded-full p-0">
                        <Input
                            type="checkbox"
                            externalId={id}
                            classes={{
                                input: checkStyle,
                            }}
                        />
                        <CheckedArrowSvg />
                    </div>
                </div>
                <p className="block font-medium leading-relaxed antialiased">{valueToDisplay()}</p>
            </div>
            {value !== 'all' && (
                <p className="justify-self-end px-0.5 text-blue opacity-0 transition-all duration-200 hover:rounded-md hover:bg-blue/20 group-hover:opacity-100">
                    ТОЛЬКО
                </p>
            )}
        </label>
    )
}
