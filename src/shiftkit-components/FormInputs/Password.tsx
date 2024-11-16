
import { FC, useState } from 'react';


interface InputPropTypes {
    id?: string;
    value: string|number;
    placeholder?: string;
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
    roundness?: "none"|"sm" | "md" | "lg" | "full";
    onChange: ()=>void;
    onFoucus?: () => void;
    onBlur?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const PasswordInput:FC< InputPropTypes> =(
    (
        {
            size='md',
            roundness="none",
            placeholder="●●●●●●●●",
            className,
            label,
            ...props
        },
    ) => {

        const [showPassword, setShowPassword] = useState<boolean>(false)

        const toggleShowPassword = () => {
            setShowPassword((prevState)=>!prevState)
        }

        return (
                <label htmlFor={props.name} className='shiftkit-form-label '>
                    {label}
                    <div className='relative'>
                        <input
                        type={showPassword?"text":"password"}
                        onBlur={props.onBlur}
                        placeholder={placeholder}
                        className={`shiftkit-form-password shiftkit-input-${size} shiftkit-input-roundness-${roundness} ${className}`}
                        />
                        <button onClick={toggleShowPassword} className='password-toggle-btn'>
                            {showPassword?"Hide":"Show"}
                        </button>
                    </div>
                </label>
        );
    }
);

export default PasswordInput;

