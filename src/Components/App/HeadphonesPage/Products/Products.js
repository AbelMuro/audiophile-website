import React from 'react';
import AllProductData from './../../AllProductData';
import DisplayItem from './../../ReusableComponents/DisplayItem';
import styles from './styles.module.css';

function Products() {

    return(
        <section className={styles.container}>
                <DisplayItem 
                    product={AllProductData['XX99 MARK II HEADPHONES']}
                    isReverse={false}
                />
                <DisplayItem
                    product={AllProductData['XX99 MARK I HEADPHONES']}
                    isReverse={true}
                />
                <DisplayItem
                    product={AllProductData['XX59 HEADPHONES']}
                    isReverse={false}
                />
        </section>
    )
}

export default Products;