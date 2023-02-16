import React from 'react';
import Headers from './../Headers';
import Products from './Products';
import Categories from './../Categories';
import CompanyMessage from './../CompanyMessage';


function HeadphonesPage() {
    return(
        <section>
            <Headers title="HEADPHONES"/>
            <Products/>
            <Categories/>
            <CompanyMessage/>
        </section>
    )
}

export default HeadphonesPage;