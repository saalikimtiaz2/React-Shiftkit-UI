export const SwitchButton = ({
    onChange,
    check,
    label,
}: {
    onChange: () => void;
    check: boolean;
    label: string;
}) => {
    return (
        <div className='flex items-center gap-x-2 font-medium'>
            <label className='switch' htmlFor='switcher' onClick={onChange}>
                <input
                    type='checkbox'
                    name='switcher'
                    checked={check}
                    readOnly
                />
                <span className='slider round' />
            </label>
            {label}
        </div>
    );
};