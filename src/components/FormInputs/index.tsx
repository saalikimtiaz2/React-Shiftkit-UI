
import { FC } from 'react';


interface InputPropTypes {
    id?: string;
    value: string|number;
    placeholder: string;
    className?: string;
    label?: string;
    name: string;
    pattren?:string,
    defaultValue?: string;
    minLength?:number,
    maxLength?:number;
    required?: boolean;
    disabled?: boolean;
    type?: "text"|"number";
    size?: "sm" | "md" | "lg" | "xl";
    roundness?: "none"|"sm" | "md" | "lg" | "full";
    onChange: ()=>void;
    onFoucus?: () => void;
    onBlur?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const Input:FC< InputPropTypes> =(
    (
        {
            type = "text",
            size='md',
            roundness="none",
            placeholder,
            className,
            label,
            ...props
        },
    ) => {


        return (
                <label htmlFor={props.name} className='shiftkit-form-label '>
                    {label}
                    <input
                    type={type}
                        onBlur={props.onBlur}
                        placeholder={placeholder}
                        className={`shiftkit-form-input shiftkit-input-${size} shiftkit-input-roundness-${roundness} ${className}`}
                    />
                </label>
        );
    }
);

export default Input;

