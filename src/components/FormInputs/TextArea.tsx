
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
    size?: "sm" | "md" | "lg" | "xl";
    row?:number,
    roundness?: "none"|"sm" | "md" | "lg" | "full";
    onChange: ()=>void;
    onFoucus?: () => void;
    onBlur?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const TextArea:FC< InputPropTypes> =(
    (
        {
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
                    <textarea
                        onBlur={props.onBlur}
                        placeholder={placeholder}
                        className={`shiftkit-form-input shiftkit-input-${size} shiftkit-input-roundness-${roundness} ${className}`}
                    />
                </label>
        );
    }
);

export default TextArea;

