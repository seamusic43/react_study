import React from 'react'


export default function PasswordInput ({ value, className, pattern, placeholder, onChange,name, errorMsg = '', ...props }){
    const [visible, setVisible] = React.useState(false);
    const inputRef = React.useRef();
    const toggleVisibility = () => {
        console.log('password input toggleVisibility');
        inputRef.current.type = visible ? 'password' : 'text';
        setVisible(!visible);
    }
    return (
        <>
            <div  className="input input-bordered flex items-center gap-2">
            <input type="password"
                onChange={onChange}
                name={name}
                pattern={pattern ? pattern : undefined}
                placeholder={placeholder}
                value={value}
                ref={inputRef}
                className={`${className ? className : ''} w-full`} />
                <span className="material-symbols-rounded fi-full" onClick={toggleVisibility}>visibility{visible? '_off' : ''}</span>
                </div>
            {errorMsg ?
                <div className={`label pb-0 pt-1 ${errorMsg ? '' : 'invisible'} `}>
                    <span className="label-text-alt error_msg">{errorMsg}</span>
                </div>
                : ''}
        </>
    )
}
