import { Input } from "@/components/ui/input";
import { forwardRef, useRef, useImperativeHandle, useMemo } from "react";

export const ValidatableInputMethods = {
    validate: () => { }
};

export const ValidatableInput = forwardRef(({ className: _className, ...inputProps }, ref) => {
    const className = useMemo(() => ['input', _className].join(' '), [_className]);
    const inputRef = useRef < HTMLInputElement > (null)

    useImperativeHandle(ref,
        () => ({
            validate: () => {
                const { value, required, pattern, title } = inputRef.current;
                if (required && !value) {
                    console.log('required', required, value);
                    return [false, 'This field is required'];
                }
                if (pattern && !new RegExp(pattern).test(value)) {
                    console.log('pattern', pattern, value);
                    return [false, title || 'Invalid value'];
                }
                return [true, ''];
            }

        })
        , []);
    return <Input {...inputProps} className={className} ref={inputRef} />
});

ValidatableInput.displayName = "ValidatableInput";