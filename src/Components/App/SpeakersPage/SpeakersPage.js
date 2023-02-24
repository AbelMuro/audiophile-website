import React from 'react';
import AllProductData from './../AllProductData';
import Headers from './../ReusableComponents/Headers';
import DisplayItem from './../ReusableComponents/DisplayItem';
import Categories from './../ReusableComponents/Categories';
import CompanyMessage from './../ReusableComponents/CompanyMessage';
import styles from './styles.module.css';

function SpeakersPage(){
    return(
        <section>
            <Headers title={"SPEAKERS"}/>
            <div className={styles.container}>
                <DisplayItem
                    product={AllProductData['ZX9 SPEAKER']}
                    isReverse={false}
                />
                <DisplayItem
                    product={AllProductData['ZX7 SPEAKER']}
                    isReverse={true}
                />                
            </div>
            <Categories/>
            <CompanyMessage/>
        </section>
    )
}

export default SpeakersPage;