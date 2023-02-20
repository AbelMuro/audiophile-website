import React, {useRef} from 'react';
import Inputs from './Inputs';
import PaymentMethod from './PaymentMethod';
import styles from './styles.module.css';

function CheckoutPage() {
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const address = useRef();
    const zip = useRef();
    const city = useRef();
    const country = useRef();
    const methodChoosen = useRef();

    return(
        <form className={styles.container}>
            <div className={styles.goBack}>
                <a>
                   Go Back 
                </a>
            </div>
            <section className={styles.checkout_summary}>
                <div className={styles.checkout}>
                    <h1 className={styles.title}>
                        CHECKOUT
                    </h1>

                    <div className={styles.billingDetails}>
                        <h2 className={styles.sectionTitle}>
                            BILLING DETAILS
                        </h2>
                        <Inputs id='name' labelName='Name' type='text' placeholder='Alexei Ward' invalidMessage='Required' ref={name}/>
                        <Inputs id='email' labelName='Email Address' type='email' placeholder='alexei@mail.com' invalidMessage='Wrong format' ref={email}/>
                        <Inputs 
                            id='tel' 
                            labelName='Phone Number' 
                            type='tel' 
                            placeholder='+1 (202)-555-0136' 
                            invalidMessage='Wrong format' 
                            pattern='(\+[0-9]{1} \([0-9]{3}\)-[0-9]{3}-[0-9]{4})|(\+[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4})|(\+[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4})|([0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{3} [0-9]{3} [0-9]{4})'
                            ref={phone}
                            />
                    </div>
                    <div className={styles.shippingInfo}>
                        <h2 className={styles.sectionTitle}>
                            SHIPPING INFO
                        </h2>
                        <Inputs id='address' labelName='Address' type='text' placeholder='1137 Williams Avenue' invalidMessage='Required'ref={address}/>
                        <Inputs id='zip' labelName='ZIP Code' type='text' placeholder='10001' pattern='([0-9]{5})|([0-9]{5}-[0-9]{4})' invalidMessage='Wrong format' ref={zip}/>
                        <Inputs id='city' labelName='City' type='text' placeholder='New York' invalidMessage='Required' ref={city}/>
                        <Inputs id='country' labelName='Country' type='text' placeholder='United States' invalidMessage='Required' ref={country}/>
                    </div>
                    <PaymentMethod ref={methodChoosen}/>
                </div>
                <div className={styles.summary}>

                </div>
            </section>
        </form>
    )
}

export default CheckoutPage;