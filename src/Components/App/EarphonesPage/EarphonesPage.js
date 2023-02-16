import React from 'react';
import Headers from './../Headers';
import DisplayItem from './../DisplayItem';
import Categories from './../Categories';
import CompanyMessage from './../CompanyMessage';
import earphone from './images';
import styles from './styles.module.css';

function EarphonesPage() {
    return(
        <section>
            <Headers title="EARPHONES"/>
            <div className={styles.container}>
                <DisplayItem
                    isNewProduct={true}
                    productImage={earphone}
                    productTitle="YX1 WIRELESS EARPHONES"
                    productDesc="Tailor your listening experience 
                    with bespoke dynamic drivers from the new YX1 
                    Wireless Earphones. Enjoy incredible high-fidelity 
                    sound even in noisy environments with its active 
                    noise cancellation feature."
                    isReverse={false}
                />                
            </div>

            <Categories/>
            <CompanyMessage/>
        </section>
    )
}

export default EarphonesPage;