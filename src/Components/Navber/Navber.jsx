import React from 'react';
import logo from "../../assets/image/logo.png"
const Navber = ({balance}) => {
    return (
        <div className='flex justify-between px-4 md:px-16 my-10'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex space-x-3 sm:space-x-5'>
                <button className='btn hidden sm:flex'>Home</button>
                <button className='btn hidden sm:flex'>Fixture</button>
                <button className='btn hidden sm:flex'>Teams</button>
                <button className='btn hidden sm:flex'>Shedules</button>
                <button className='btn'>{balance} Coin <img width="42" height="42" src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="coin-emoji"/></button>
            </div>
        </div>
    );
};

export default Navber;