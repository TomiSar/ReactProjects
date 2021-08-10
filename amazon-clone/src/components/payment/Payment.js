import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkout/CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [ { basket, user }, dispatch ] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

                {/* Payment section - Delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Coding lane 123</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                
                {/* Payment section - Review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {/* Show basket item */}
                        { basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe magic will go */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;