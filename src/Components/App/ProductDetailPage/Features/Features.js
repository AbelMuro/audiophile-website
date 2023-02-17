import React from 'react';
import styles from './styles.module.css';

function Features({product}) {
    return(
        <div className={styles.otherDetails}>
            <div className={styles.features}>
                <h1 className={styles.featuresTitle}>            
                    FEATURES
                </h1>
                <p className={styles.featuresDesc}>
                    {product.featuresParagraphOne}
                    {product.featuresParagraphTwo ? <><br/><br/></> : <></>}
                    {product.featuresParagraphTwo ? product.featuresParagraphTwo : <></>}
                </p>
            </div>

            <div className={styles.inTheBox}>
                <h1 className={styles.inTheBoxTitle}>
                    IN THE BOX
                </h1>
                <ul className={styles.inTheBoxList}>
                    {product.includes.map((include, i) => {
                        return(
                            <li key={i}>
                                <span>
                                    {`${include.quantity}x`}
                                </span>
                                <span> 
                                    {include.item}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Features;