import { memo, useState } from 'react';
import Hotbar from './Hotbar';
import ShoppingCart from './ShoppingCart';

let tempCart = {};

const App = () => {
    const [cart, setCart] = useState({});
    const [storage, setStorage] = useState({});

    const combineObjects = (obj1, obj2) => {
        if (Object.keys(obj1).length === 0) return;
        
        const newCart = Object.entries(obj1)
            .reduce((acc, [key, val]) => {
                acc[key] = (acc[key] || 0) + val;
                return acc;
            }
            , {...obj2}
        );

        return newCart;
    };

    const toggleShoppingCart = () => {
        const shoppingCart = document.querySelector('.shopping-cart');
        shoppingCart.classList.toggle('active');

        const shoppingCartExtra = document.querySelector('.shopping-cart-extra');
        shoppingCartExtra.classList.toggle('active');
        if (shoppingCartExtra.classList.contains('active')) {
            shoppingCartExtra.style.visibility = 'visible';
        } else {
            const cartExtraTimeout = setTimeout(() => {
                shoppingCartExtra.style.visibility = 'hidden';
                clearTimeout(cartExtraTimeout);
            }, 800);
        };

        if (shoppingCart.classList.contains('active')) {
            const combinedCarts = combineObjects(tempCart, cart);

            if (combinedCarts === undefined) return;

            setCart(combinedCarts);
            tempCart = {};
        };
    };

    const addToStorage = () => {
        if (Object.keys(cart).length === 0) return;

        const combinedStorage = combineObjects(cart, storage);

        if (combinedStorage === undefined) return;

        setStorage(combinedStorage);
        setCart({});
    };
    
    return (
        <div>
            <Hotbar
                storage={storage}
                tempCart={tempCart}
                combineObjects={combineObjects}
                addToStorage={addToStorage}
                toggleShoppingCart={toggleShoppingCart}/>
            <ShoppingCart
                cart={cart}
                addToStorage={addToStorage}
                toggleShoppingCart={toggleShoppingCart}/>
        </div>
    );
};

export default memo(App);