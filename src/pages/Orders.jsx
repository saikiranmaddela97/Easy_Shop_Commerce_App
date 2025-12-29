import React from 'react';
import './Orders.css';
import { Link, useLocation } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct/CheckoutProduct';

function Orders() {
    const location = useLocation();
    const order = location.state;
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    }

    return (
        <div className='orders'>
            <h1>Thank you, your order has been placed!</h1>

            <p className='orders__confirmation'>
                We've sent a confirmation email to your registered email address.
            </p>

            {order && (
                <div className="orders__summary">
                    <div className="orders__id">
                        <h3>Order ID: {order.id}</h3>
                        <p>Placed on: {order.date}</p>
                    </div>

                    <div className="orders__items">
                        {order.items?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                hideButton
                            />
                        ))}
                    </div>

                    <div className="orders__total">
                        <h3>Order Total: {formatCurrency(order.amount)}</h3>
                    </div>
                </div>
            )}

            <div className="orders__actions">
                <button className='orders__trackingButton' onClick={() => alert("Tracking feature coming soon!")}>Track Package</button>

                <Link to="/">
                    <button className='orders__continueButton'>Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default Orders;
