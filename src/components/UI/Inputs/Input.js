import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css'

// ref prop included for pulling from the Login.js file as well as allowing useImperativeHandle to work
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus()
    };

    // pulls ref prop from Login.js file in the Inputs
    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    return (
        <div
            className={`${classes.control} 
    ${props.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
});

export default Input