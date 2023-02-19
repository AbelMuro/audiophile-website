import React from 'react';
import styles from './styles.module.css';

function CheckoutPage() {
    return(
        <section className={styles.container}>
            <div className={styles.goBack}>
                <a>
                   Go Back 
                </a>
            </div>
            <div className={styles.checkout_summary}>


                <form className={styles.checkout}>
                    <h1 className={styles.title}>
                        CHECKOUT
                    </h1>

                    <div className={styles.billingDetails}>
                        <h2 className={styles.sectionTitle}>
                            BILLING DETAILS
                        </h2>
                        <fieldset className={styles.label_input}>
                            <label htmlFor={styles.name}>Name</label>
                            <input className={styles.inputs} id={styles.name}/>                            
                        </fieldset>
                        <fieldset className={styles.label_input}>
                            <label htmlFor={styles.email}>Email Address</label>
                            <input className={styles.inputs} id={styles.email}/>                            
                        </fieldset>
                        <fieldset className={styles.label_input}>
                            <label htmlFor={styles.phone}>Phone Number</label>
                            <input className={styles.inputs} id={styles.phone}/>                            
                        </fieldset>
                    </div>

                </form>


                <div className={styles.summary}>

                </div>
            </div>
        </section>
    )
}

export default CheckoutPage;