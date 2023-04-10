import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    console.log(job);
    const { company_img, job_title, employment_time, employment_type, company_name, salary } = job
    return (
        <div className='border border-teal-300 p-6 rounded-lg'>
            <img src={company_img} alt="" />
            <h3 className='text-3xl font-bold my-3'>{job_title}</h3>
            <h4 className='text-[18px] font-medium mb-3'>{company_name}</h4>
            <button className="btn btn-outline mr-5">{employment_type}</button>
            <button className="btn btn-outline">{employment_time}</button>
            <div className='my-3'>
                <Link>Location</Link>
                <Link>Salary</Link>
            </div>
            <Link><button className="btn btn-active btn-primary mr-5">View Details</button></Link>
        </div>
    );
};

export default Job;