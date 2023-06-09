import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Job = ({ job }) => {
    const { company_img, job_title, employment_time, employment_type, company_name, salary, location, id } = job
    return (
        <div className='border border-teal-300 p-6 rounded-lg'>
            <img src={company_img} alt="" />
            <h3 className='text-3xl font-bold my-3'>{job_title}</h3>
            <h4 className='text-[18px] font-medium mb-3'>{company_name}</h4>
            <button className="btn btn-outline mr-5">{employment_type}</button>
            <button className="btn btn-outline">{employment_time}</button>
            <div className='my-5 flex items-center gap-10'>
                <Link className='flex items-center text-sm lg:text-lg'><MapPinIcon className='w-6 h-6 text-[#d57575]'></MapPinIcon>{location}</Link>
                <Link className='flex items-center text-sm lg:text-lg'><CurrencyDollarIcon className='w-6 h-6 text-[#d57575]'></CurrencyDollarIcon> {salary}</Link>
            </div>
            <Link to={`job/${id}`}><button className="btn btn-active btn-primary mr-5">View Details</button></Link>
        </div>
    );
};

export default Job;