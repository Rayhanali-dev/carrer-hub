import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-600 py-8'>
            <div className='max-w-7xl mx-auto flex justify-between'>
                <div className="logo">
                    <h3>Logo</h3>
                </div>
                <div>
                    <NavLink to={`/`}>Home</NavLink>
                </div>
                <div>
                    <button>Just akta button</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;