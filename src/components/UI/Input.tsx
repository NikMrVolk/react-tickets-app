import React, { ReactNode, useId } from 'react'

import { cn } from '../../utils/libs'

interface InputProps extends React.ComponentProps<'input'> {
    classes?: {
        label?: string
        input?: string
    }
    externalId?: string
    label?: ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ classes = { label: '', input: '' }, label, externalId, ...props }, ref) => {
        const internalId = useId()
        const id = externalId ?? internalId

        return (
            <>
                {label && (
                    <label className={cn(classes.label)} htmlFor={id}>
                        {label}
                    </label>
                )}

                <input className={cn('cursor-pointer', classes.input)} id={id} {...props} ref={ref} />
            </>
        )
    },
)

Input.displayName = 'Input'
