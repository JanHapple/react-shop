import React from 'react';
import { Link } from "react-router-dom"
import PurchaseCard from '../components/PurchaseCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import "../css/shoppingcart.css"

const checkout = <FontAwesomeIcon className="checkout-sign" icon={ faMoneyCheckAlt }/>
const deleteAll = <FontAwesomeIcon className="delete-all" icon={ faBackspace }/>

const ShoppingCart = props => {
    let showShoppingCart = props.purchaselist.map((purchase, i) => {
        return <PurchaseCard key={ i } id={ purchase.id } currPurchase={purchase} add={props.add} remove={props.remove} price={props.price} removeProduct={props.removeProduct} />
    });

    let content = props.purchaselist.length === 0 ? <p className="empty-cart-msg">Your ShoppingCart is empty!</p> : showShoppingCart

    return(
          <>
            <h1 className="shopping-cart-header">Your Shopping Cart</h1>
            <main className="purchase-list">
                <div className="purchase-container">

               {content}
                
                </div>
                <footer className="price-overview">
                    <h3 className="total-price">Price: {props.price} $</h3>
                    <button className="remove-all-btn" onClick={props.removeAll}>{deleteAll}</button>
                    <Link className="link" to="/checkout">
                        <button className="checkout-btn">{checkout}</button>
                    </Link>
                </footer>
            </main>
          </>
    )
}

export default ShoppingCart;