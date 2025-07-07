import { memo } from 'react';
import { BsMinecart } from 'react-icons/bs';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import HomePage from './HomePage';
import StoragePage from './StoragePage';

const Hotbar = ({ storage, tempCart, combineObjects, toggleShoppingCart }) => {
    const handleHotbar = (what) => {
        const elementHotbar = document.querySelectorAll('.hotbar .active');
        if (elementHotbar.length === 1) {
            elementHotbar[0].classList.remove('active');
        };
        const buttonHotbar = document.getElementById(`hotbar-button-${what}`);
        buttonHotbar.classList.toggle('active');
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
                    <button className='button-icon'
                        onClick={() => toggleShoppingCart()}>
                        <BsMinecart/>
                    </button>
                </div>
            </section>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage
                            tempCart={tempCart}
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