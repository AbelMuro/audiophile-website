import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css';

const Inputs = forwardRef(({id, labelName, type, placeholder, invalidMessage, ...rest}, ref) => {
    const [input, setInput] = useState('');
    const inputElement = useRef();
    const invalid = useRef();

    const handleFocus = () => {
        inputElement.current.style.outline = '1px solid #D87D4A';
        inputElement.current.style.border = 'none';
        invalid.current.style.display = '';
    }

    const handleBlur = () => {
        if(inputElement.current.checkValidity()){
            inputElement.current.style.outline = '';
            inputElement.current.style.border = '';             
        }
        else{
            inputElement.current.style.outline = '1px solid #CD2C2C';
            inputElement.current.style.border = '1px solid #CD2C2C';  
            invalid.current.style.display = 'block';
        }

    }

    const handleInvalid = () => {
        inputElement.current.setCustomValidity(' ');
        inputElement.current.style.outline = '1px solid #CD2C2C';
        inputElement.current.style.border = '1px solid #CD2C2C';  
        invalid.current.style.display = 'block';
    }

    const handleChange = (e) => {
        inputElement.current.setCustomValidity('');
        setInput(e.target.value);
    }


    useImperativeHandle(ref, () => ({
        get state() {
            return input;
        } 
    }));

    return(
        <fieldset className={styles.label_input}>
            <label htmlFor={id} className={styles.labelTitle}>{labelName}</label>
            <input
                id={id}
                value={input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                onChange={handleChange}
                type={type}
                className={styles.inputs}
                placeholder={placeholder}
                ref={inputElement}
                {...rest}
                required
            />
            <p className={styles.invalidMessage} ref={invalid}>{invalidMessage}</p>
        </fieldset>
    )
})

export default Inputs;