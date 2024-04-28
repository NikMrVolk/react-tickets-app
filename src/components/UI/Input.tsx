import React, { ReactNode, useId } from 'react'

import { cn } from '../../utils/libs'

interface InputProps extends React.ComponentProps<'input'> {
    classes?: {
        label?: string
        input?: string
    }
    children?: ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ classes = { label: '', input: '' }, children, ...props }, ref) => {
        const id = useId()

        return (
            <>
                {children && (
                    <label className={cn(classes.label)} htmlFor={id}>
                        {children}
                    </label>
                )}

                <input className={cn(classes.input)} id={id} {...props} ref={ref} />
            </>
        )
    },
)

Input.displayName = 'Input'
