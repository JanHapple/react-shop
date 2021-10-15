import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "../css/checkoutbtn.css"
import { ShowNumOfPurchases } from '../App';

const addToCart = <FontAwesomeIcon className="addToCart" icon={ faCartPlus }/>

const CheckoutBtn = props => {
    const items = useContext(ShowNumOfPurchases)
    
    const chooseItem = () => {
        items.choose(props.id)
    }
    
    return(
        <button className="checkoutbtn" onClick={chooseItem} >{ addToCart }</button>   
    )
}

export default CheckoutBtn