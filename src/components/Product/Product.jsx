import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider';
import toast, { Toaster } from 'react-hot-toast';

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        toast.success('Added to Cart!');
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
            <Toaster />
        </div>
    );
};

export default Product;
