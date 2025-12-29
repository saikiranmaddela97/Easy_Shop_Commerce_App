import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            theme: "kitchen",
            title: "Starting ₹99",
            subtitle: "Budget store",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Kitchen items
            offerText: "Free delivery on first order",
            bankOffer: "Up to 10% Instant Discount*"
        },
        {
            id: 2,
            theme: "fashion",
            title: "Under ₹799",
            subtitle: "EasyShop Fashion",
            tagline: "Shop sports shoes",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Sports shoe
            offerText: "Easy Returns | Latest Trends",
            bankOffer: "Unlimited 5% cashback"
        },
        {
            id: 3,
            theme: "electronics",
            title: "Best Sellers",
            subtitle: "Latest Gadgets",
            tagline: "Up to 40% OFF",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Headphones (Updated stable)
            offerText: "No Cost EMI Available",
            bankOffer: "Flat ₹500 OFF on Cards"
        },
        {
            id: 4,
            theme: "beauty",
            title: "Beauty & Grooming",
            subtitle: "Glow Up",
            tagline: "Starting ₹199",
            image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Cosmetics
            offerText: "Buy 2 Get 1 Free",
            bankOffer: "Extra 5% OFF on UPI"
        },
        {
            id: 5,
            theme: "home",
            title: "Home Decor",
            subtitle: "Refresh Your Space",
            tagline: "Min 50% OFF",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Chair/Home
            offerText: "Free Shipping above ₹499",
            bankOffer: "10% Cashback"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-scroll
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const slide = slides[currentSlide];

    return (
        <div className={`hero hero--${slide.theme}`}>
            <div className="hero__container">
                <button className="hero__arrow hero__arrow--left" onClick={prevSlide}>
                    &#10094;
                </button>

                <div className="hero__content">
                    <div className="hero__text-section">
                        {slide.subtitle && <h3 className="hero__subtitle">{slide.subtitle}</h3>}
                        <h1 className="hero__title">{slide.title}</h1>
                        {slide.tagline && <p className="hero__tagline">{slide.tagline}</p>}

                        <div className="hero__offers">
                            {slide.offerText && <div className="hero__offer-badge">{slide.offerText}</div>}
                            <div className="hero__bank-offer">
                                <span className="hero__bank-icon">💳</span>
                                <div>{slide.bankOffer}</div>
                            </div>
                            <small className="hero__tnc">*T&C apply</small>
                        </div>
                    </div>

                    <div className="hero__image-section">
                        <img src={slide.image} alt={slide.title} className="hero__image" />
                    </div>
                </div>

                <button className="hero__arrow hero__arrow--right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Hero;
