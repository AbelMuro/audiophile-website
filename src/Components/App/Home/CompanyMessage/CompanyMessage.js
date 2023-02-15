import React from 'react';
import photo from './images/image-best-gear.jpg';
import styles from './styles.module.css';

function CompanyMessage() {
    return(
        <section className={styles.container}>

            <div className={styles.flexbox}>
                <div className={styles.message}>
                    <h1>
                        BRINGING YOU THE 
                        <span> BEST </span>
                        AUDIO GEAR
                    </h1>
                    <p>
                        Located at the heart of New York City, 
                        Audiophile is the premier store for high 
                        end headphones, earphones, speakers, and 
                        audio accessories. We have a large showroom 
                        and luxury demonstration rooms available for 
                        you to browse and experience a wide range of 
                        our products. Stop by our store to meet some 
                        of the fantastic people who make Audiophile 
                        the best place to buy your portable audio 
                        equipment. 
                    </p>
                </div>
                <img src={photo} className={styles.photo}/>
            </div>

        </section>
    )
}

export default CompanyMessage;