import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(true)
    return (
        <nav className='bg-slate-200 py-8 px-5 lg:px-0 mx-5 lg:mx-0'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <Link to={`/`}>
                    <h3 className='text-2xl font-bold text-black'>Job Search Genius</h3>
                </Link>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open ? <Bars3Icon className='w-6 h-6'></Bars3Icon> : <XMarkIcon className='w-6 h-6'></XMarkIcon>
                    }
                </div>
                <div className={` flex flex-col md:flex-row md:gap-6 gap-3 p-8 lg:p-0 bg-slate-300 md:bg-transparent md:duration-0 duration-500 absolute md:static ${open ? '-top-72 right-5' : 'top-20 right-5'}`}>
                    <Link className="text-black text-[18px] font-medium" to={`/`}>Home</Link>
                    <Link className="text-black text-[18px] font-medium" to={`/statistics`}>Statistics</Link>
                    <Link className="text-black text-[18px] font-medium" to={`/apply`}>Applied Jobs</Link>
                    <Link className="text-black text-[18px] font-medium" to={`/blog`}>Blog</Link>
                    <button className="btn btn-active btn-secondary md:hidden">Star Applying</button>
                </div>
                <div className='hidden md:block'>
                    <button className="btn btn-active btn-secondary">Star Applying</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;