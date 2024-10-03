import React from 'react';

const Navbar = () => {
    return (
        <div className='flex md:justify-between justify-center w-full max-w-[1200px] items-center py-4 fixed z-10 backdrop-blur-[50px] bg-transparent'>
            <div className='flex font-gilroyRegular text-xl justify-center items-center'>
                Pratik.dev
            </div>
            <div className='md:flex-row md:justify-center md:gap-6 font-gilroyRegular text-lg md:flex hidden'>
                <span>link1</span>
                <span>link2</span>
                <span>link3</span>
                <span>link4</span>
            </div>
        </div>
    );
};

export default Navbar;