import React from 'react';
import AllProductData from './../AllProductData';
import Headers from './../ReusableComponents/Headers';
import DisplayItem from './../ReusableComponents/DisplayItem';
import Categories from './../ReusableComponents/Categories';
import CompanyMessage from './../ReusableComponents/CompanyMessage';
import styles from './styles.module.css';

function EarphonesPage() {

    return(
        <section>
            <Headers title="EARPHONES"/>
            <div className={styles.container}>
                <DisplayItem
                    product={AllProductData['YX1 WIRELESS EARPHONES']}
                    isReverse={false}
                />                
            </div>
            <Categories/>
            <CompanyMessage/>
        </section>
    )
}

export default EarphonesPage;