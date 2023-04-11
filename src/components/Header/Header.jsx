import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-200 py-8'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <Link to={`/`}>
                    <h3 className='text-2xl font-bold text-black'>Job Search Genius</h3>
                </Link>
                <div className='flex gap-5'>
                    <Link className="text-black text-[18px] font-medium" to={`/`}>Home</Link>
                    <Link className="text-black text-[18px] font-medium" to={`/statistics`}>Statistics</Link>
                    <Link className="text-black text-[18px] font-medium" to={`/apply`}>Applied Jobs</Link>
                    <Link className="text-black text-[18px] font-medium" to={`/blog`}>Blog</Link>
                </div>
                <div>
                    <button className="btn btn-active btn-secondary">Star Applying</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;