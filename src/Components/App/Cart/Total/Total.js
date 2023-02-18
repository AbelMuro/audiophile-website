import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

function Total({items}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let accumulate = 0;
        items.forEach((item) => {
            let itemPrice = item.price.replace(',', "");
            accumulate += Number(itemPrice) * Number(item.quantity)
        })
        setTotal(accumulate.toLocaleString());
    }, [items])

    return(                
        <section className={styles.container}>
                <p className={styles.title}>
                    TOTAL
                </p>
                <p className={styles.total}>
                    $ {total}
                </p>
        </section>
    )
}

export default Total;