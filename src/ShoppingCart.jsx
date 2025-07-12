import { memo } from 'react';

const ShoppingCart = ({ cart, addToStorage, toggleShoppingCart }) => {
    const handleBuy = () => {
        const elementCartItems = document.querySelector('.shopping-cart-items');
        elementCartItems.classList.add('animation-buy-items');
    };

    const handleAnimationEnd = () => {
        const elementCartItems = document.querySelector('.shopping-cart-items');
        elementCartItems.classList.remove('animation-buy-items');

        addToStorage();
    };

    return (
        <div>
            <section className='shopping-cart'>
                <button onClick={toggleShoppingCart}>Close</button>
                <h2>Shopping Cart</h2>
                <div className='shopping-cart-items'
                    onAnimationEnd={handleAnimationEnd}>
                    {Object.keys(cart).map((item) => {
                        return <div key={item}>
                            <span className={`shape ${item}`}></span>
                            <span>{cart[item]}</span>
                        </div>
                    })}
                </div>
                <button onClick={handleBuy}>Buy</button>
            </section>
            <section className='shopping-cart-extra'
                onClick={toggleShoppingCart}
                role='button'></section>
        </div>
    );
};

export default memo(ShoppingCart);