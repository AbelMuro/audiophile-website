import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import Inputs from './../../ReusableComponents/Inputs';
import styles from './styles.module.css';
import cashOnDeliveryIcon from './images/icon-cash-on-delivery.svg';

const PaymentMethod = forwardRef((props, ref) => {
    const [payment, setPayment] = useState('eMoney')
    const firstOption = useRef();
    const secondOption = useRef();
    const eMoneyNumber = useRef();
    const eMoneyPIN = useRef();

    const handleChange = (e) => {
        setPayment(e.target.value);
    }

    useImperativeHandle(ref, () => ({
        get paymentMethod(){
            return payment;
        },
        get eMoneyNumber() {
            return eMoneyNumber;
        },
        get eMoneyPIN(){
            return eMoneyPIN;
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
        <>
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
                
            </div>  
            {payment === 'eMoney' ? <div className={styles.eMoneyInputs}>
                <Inputs 
                    id='e-money-number'
                    labelName='e-Money Number'
                    type='text'
                    placeholder='238521993'
                    invalidMessage='Wrong format'
                    pattern='[0-9]{9}'
                    ref={eMoneyNumber}
                />
                <Inputs 
                    id='e-money-pin'
                    labelName='e-Money PIN'
                    type='text'
                    placeholder='6891'
                    invalidMessage='Wrong format'
                    pattern='[0-9]{4}'
                    ref={eMoneyPIN}
                />
            </div> : 
            <div className={styles.cashOnDelivery}>
                <img src={cashOnDeliveryIcon} className={styles.messageIcon}/>
                <p className={styles.message}>
                    The ‘Cash on Delivery’ option enables you to pay in cash when our 
                    delivery courier arrives at your residence. Just make sure your 
                    address is correct so that your order will not be cancelled.
                </p>
            </div>
            }               
        </>

    )
})

export default PaymentMethod;