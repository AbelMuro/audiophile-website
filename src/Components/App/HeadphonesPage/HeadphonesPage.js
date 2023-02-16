import React from 'react';
import Headers from './../ReusableComponents/Headers';
import Products from './Products';
import Categories from './../ReusableComponents/Categories';
import CompanyMessage from './../ReusableComponents/CompanyMessage';


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