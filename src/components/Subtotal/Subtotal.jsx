import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    // Calculate currency format
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    }

    return (
        <div className="subtotal">
            {/* Simple render without CurrencyFormat dependency for now to allow npm start to work without extra installs if possible, 
                or just use Intl.NumberFormat */}

            <p>
                {/* Part of the homework */}
                Subtotal ({basket?.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>


            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
