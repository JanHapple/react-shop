import React from 'react';
import Navigation from './Navigation';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import "../css/header.css";

const shopIcon = <FontAwesomeIcon icon={ faStore } className="shopIcon"/>
const shopBasket = <FontAwesomeIcon icon={ faShoppingBasket } className="shopBasket"/>

const Header = props => {
    return (
    <header className="header">
        <Link to="/">
            <button className="brand">{ shopIcon }<span className="onlineshop">Onlineshop</span></button>
        </Link>
        <Navigation />
        <Link to="/cart">
            <button className="shopping-basket" purchaselist={props.purchaseList} onClick={props.priceList}>{ shopBasket }<span className="num-of-items">{props.numOfItems}</span></button>
        </Link>
    </header>
    )
    
}

export default Header;