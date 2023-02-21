import React, {useState, useEffect, useRef} from 'react';
import {v4 as uuid} from 'uuid'
import {useSelector} from 'react-redux';
import styles from './styles.module.css';

function Summary() {
    const items = useSelector(state => state.cart.items);
    const shipping = useRef(50);
    const [total, setTotal] = useState(0);
    const [VAT, setVAT] = useState(0);


    const handleMouseEnter = (e) => {
        const button = e.target;
        button.setAttribute('value', 'CONTINUE')
    }

    const handleMouseLeave = (e) => {
        const button = e.target;
        button.setAttribute('value', 'CONTINUE & PAY');
    }


    useEffect(() => {
        let temp = 0;
        items.forEach((item) => {
            temp += item.price * item.quantity;
        })
        setTotal(temp);
        setVAT(() => {
            let vat = temp * 0.2
            return Number(vat.toFixed(0));
        });
    }, [items])

    return(
        <section className={styles.summary}>
            <h1 className={styles.title}>
                SUMMARY
            </h1>
            <div className={styles.allItems}>
                {items.map((item) => {
                    return(
                        <div className={styles.itemContainer} key={uuid()}>

                            <img src={item.image} className={styles.itemImage}/>
                            <div className={styles.itemInfo}>
                                <h2 className={styles.itemTitle}>
                                    {item.title}
                                </h2>
                                <p className={styles.itemPrice}>
                                    $ {item.price.toLocaleString()}
                                </p>
                            </div>
                            <p className={styles.itemQuantity}>
                                x{item.quantity}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.totalContainer}>
                <h2 className={styles.totalTitle}>
                    TOTAL
                </h2>
                <p className={styles.totalAmount}>
                    $ {total.toLocaleString()}
                </p>
            </div>    
            <div className={styles.totalContainer}>
                <h2 className={styles.totalTitle}>
                    SHIPPING
                </h2>
                <p className={styles.totalAmount}>
                    $ 50
                </p>
            </div>         
            <div className={styles.totalContainer}>
                <h2 className={styles.totalTitle}>
                    VAT &#40;INCLUDED&#41;
                </h2>
                <p className={styles.totalAmount}>
                    $ {VAT.toLocaleString()}
                </p>
            </div>   
            <div className={styles.grandTotal}>
                <h2 className={styles.totalTitle}>
                    GRAND TOTAL
                </h2>
                <p className={styles.grandTotalAmount}>
                    $ {(total + VAT + shipping.current).toLocaleString()}
                </p>    
            </div>  
            <input type='submit' className={styles.continue} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} value='CONTINUE'/>
        </section>
    )
}

export default Summary;