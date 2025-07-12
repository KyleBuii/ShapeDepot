import { memo } from 'react';
import { BsMinecart } from 'react-icons/bs';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import HomePage from './HomePage.jsx';
import StoragePage from './StoragePage.jsx';

const Hotbar = ({ storage, cart, setCart, combineObjects, toggleShoppingCart }) => {
    const handleHotbar = (what) => {
        const elementHotbar = document.querySelectorAll('.hotbar .active');
        if (elementHotbar.length === 1) {
            elementHotbar[0].classList.remove('active');
        };
        const buttonHotbar = document.getElementById(`hotbar-button-${what}`);
        buttonHotbar.classList.toggle('active');
    };

    const getTotalCart = () => {
        return Object.values(cart).reduce((sum, value) => sum + value, 0);
    };

    return (
        <BrowserRouter>
            <section className='hotbar'>
                <h1>ShapeDepot</h1>
                <div className='hotbar-buttons'>
                    <Link to={'/'}>
                        <button id='hotbar-button-home'
                            className='active'
                            onClick={() => handleHotbar('home')}>Home</button>
                    </Link>
                    <Link to={'/storage'}>
                        <button id='hotbar-button-storage'
                            onClick={() => handleHotbar('storage')}>Storage</button>
                    </Link>
                    <button id='shopping-cart-button'
                        className='button-icon'
                        onClick={() => toggleShoppingCart()}>
                        <BsMinecart/>
                        {(getTotalCart() !== 0) && <span className='button-icon-extra'>{getTotalCart()}</span>}
                    </button>
                </div>
            </section>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage
                            cart={cart}
                            setCart={setCart}
                            combineObjects={combineObjects}/>
                    }/>
                <Route
                    path='/storage'
                    element={
                        <StoragePage
                            storage={storage}/>
                    }/>
            </Routes>
        </BrowserRouter>
    );
};

export default memo(Hotbar);