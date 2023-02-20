import React from 'react';
import {v4 as uuid} from 'uuid'
import {useSelector} from 'react-redux';
import styles from './styles.module.css';

function Summary() {
    const items = useSelector(state => state.cart.items)

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
            <div></div>         {/*calculate total */}
            <div></div>         {/*calculate shipping */}
            <div></div>         {/*calculate VAT */}
        </section>
    )

}

export default Summary;