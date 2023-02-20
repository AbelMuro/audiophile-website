import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import PaymentDetails from './PaymentDetails';
import styles from './styles.module.css';

const PaymentMethod = forwardRef((props, ref) => {
    const [payment, setPayment] = useState('eMoney')
    const firstOption = useRef();
    const secondOption = useRef();

    const handleChange = (e) => {
        setPayment(e.target.value);
    }

    useImperativeHandle(ref, () => ({
        get state(){
            return payment;
        }
    }));

    useEffect(() => {
        if(payment === 'eMoney'){
            firstOption.current.style.border = '1px solid #D87D4A';
            secondOption.current.style.border = '';
        }

        else if(payment === 'cash on delivery'){
            firstOption.current.style.border = '';
            secondOption.current.style.border = '1px solid #D87D4A'
        }
    }, [payment])


    return(
        <div className={styles.paymentMethod}>
            <h2 className={styles.sectionTitle}>
                PAYMENT DETAILS
            </h2>
            <h3 className={styles.paymentTitle}>
                Payment Method
            </h3>
            <fieldset className={styles.firstOption} ref={firstOption}>
                <input 
                    value='eMoney'
                    checked={payment === 'eMoney'}
                    onChange={handleChange}
                    type='radio' 
                    className={styles.radio} 
                    id='eMoney' 
                    name='paymentMethod' 
                />
                <label htmlFor='eMoney' className={styles.radioLabel}>e-Money</label>
            </fieldset>
            <fieldset className={styles.secondOption} ref={secondOption}>
                <input 
                    value='cash on delivery'
                    checked={payment === 'cash on delivery'}
                    onChange={handleChange}
                    type='radio'         
                    className={styles.radio} 
                    id='cash' 
                    name='paymentMethod'
                />
                <label htmlFor='cash' className={styles.radioLabel}>Cash on Delivery</label>
            </fieldset>
            <PaymentDetails methodChoosen={payment}/>
        </div>
    )
})

export default PaymentMethod;