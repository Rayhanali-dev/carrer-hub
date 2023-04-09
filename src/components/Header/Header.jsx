import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-600 py-8'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <Link to={`/`}>
                    <h3 className='text-2xl font-bold text-white'>Job Search Genius</h3>
                </Link>
                <div className='flex gap-5'>
                    <NavLink className="text-white text-[18px] font-medium" to={`/`}>Home</NavLink>
                    <NavLink className="text-white text-[18px] font-medium" to={`/statistics`}>Statistics</NavLink>
                    <NavLink className="text-white text-[18px] font-medium" to={`/apply`}>Applied Jobs</NavLink>
                    <NavLink className="text-white text-[18px] font-medium" to={`/blog`}>Blog</NavLink>
                </div>
                <div>
                    <button className="btn btn-active btn-secondary">Star Applying</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;