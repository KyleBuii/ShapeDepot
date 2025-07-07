import { memo } from 'react';

const ShoppingCart = ({ cart, addToStorage, toggleShoppingCart }) => {
    return (
        <div>
            <section className='shopping-cart'>
                <button onClick={() => toggleShoppingCart()}>Close</button>
                <h2>Shopping Cart</h2>
                <div>
                    {Object.keys(cart).map((item) => {
                        return <div key={item}>
                            <span className={`shape ${item}`}></span>
                            <span>{cart[item]}</span>
                        </div>
                    })}
                </div>
                <button onClick={() => addToStorage()}>Buy</button>
            </section>
            <section className='shopping-cart-extra'
                onClick={() => toggleShoppingCart()}
                role='button'></section>
        </div>
    );
};

export default memo(ShoppingCart);