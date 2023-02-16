import React from 'react';
import Headers from './../ReusableComponents/Headers';
import DisplayItem from './../ReusableComponents/DisplayItem';
import Categories from './../ReusableComponents/Categories';
import CompanyMessage from './../ReusableComponents/CompanyMessage';
import images from './images';
import styles from './styles.module.css';

function SpeakersPage(){
    return(
        <section>
            <Headers title={"SPEAKERS"}/>
            <div className={styles.container}>
                <DisplayItem
                    isNewProduct={true}
                    productImage={images["zx9Speaker"]}
                    productTitle="ZX9 SPEAKER"
                    productDesc="Upgrade your sound system with the all new ZX9 active speaker. 
                    It’s a bookshelf speaker system that offers truly wireless connectivity -- 
                    creating new possibilities for more pleasing and practical audio setups."
                    isReverse={false}
                />
                <DisplayItem
                    isNewProduct={false}
                    productImage={images["zx7Speaker"]}
                    productTitle="ZX7 SPEAKER"
                    productDesc="Stream high quality sound wirelessly with minimal loss. 
                    The ZX7 bookshelf speaker uses high-end audiophile components that 
                    represents the top of the line powered speakers for home or studio use."    
                    isReverse={true}
                />                
            </div>
            <Categories/>
            <CompanyMessage/>
        </section>
    )
}

export default SpeakersPage;