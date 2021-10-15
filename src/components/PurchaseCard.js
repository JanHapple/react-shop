import React from 'react';
import "../css/purchasecard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const addAmount = <FontAwesomeIcon className="add-amount" icon={faPlusSquare}/>
const removeAmount = <FontAwesomeIcon className="remove-amount" icon={faMinusSquare}/>
const remove = <FontAwesomeIcon className="trash" icon={faTrashAlt}/>

const PurchaseCard = props => {
    const addOne = () => {
        props.add(props.id)
    }
    
    const removeOne = () => {
        props.remove(props.id)
    }

    const removeFromCart = () => {
        props.removeProduct(props.id)
    }
    
    return(
        <div className="purchase-card">
            <img className="purchase-img" src={ props.currPurchase.image } alt={ props.currPurchase.altText}/>  
            <div className="description">
                <h1 className="purchase-heading">{props.currPurchase.heading}</h1>
                <h3 className="price">{(props.currPurchase.count * props.currPurchase.price).toFixed(2)} $</h3>
                <div className="price-section">
                    <button className="amount-btn" onClick={removeOne}>{removeAmount}</button>
                    <span className="amount">{props.currPurchase.count}</span>
                    <button className="amount-btn" onClick={addOne}>{addAmount}</button>
                    
                    {/* <RemoveBtn id={props.id}/> */}
                </div>
                <button className="remove-btn" onClick={removeFromCart}>{remove}</button>
            </div>
        </div>
    )
}

export default PurchaseCard;     