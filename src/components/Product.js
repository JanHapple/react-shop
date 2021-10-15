import React from 'react';
import CheckoutBtn from './CheckoutBtn';
import "../css/product.css";


const Product = props => {
    

    return(
        <div className="product-container">
            <img className="product-img" src={ props.currProduct.image } alt={ props.currProduct.altText}/>  
            <div className="description">
                <h1>{props.currProduct.heading}</h1>
                <p>{props.currProduct.description}</p>
                <div className="price-section">
                    <h3>{props.currProduct.price} $</h3>
                    <CheckoutBtn id={props.id} />
                </div>
            </div>
        </div>
    )
}

export default Product; 