import React from 'react';

import Product from "../components/Product";
import "../css/storecontainer.css"

const Storecontainer = props => {
    const chosenProducts = props.selected;

    let displayProducts = chosenProducts.map((product, i) => {
         return <Product key={ i } id={ product.id } currProduct={ product } />
     })

    return (
    <>
        <main className="product-list">
            { displayProducts }
            {/* <Checkout /> */}
        </main>
    </>
    );
}

export default Storecontainer;