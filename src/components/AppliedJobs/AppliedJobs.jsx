import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const AppliedJobs = ({ jobs }) => {
    console.log(jobs);
    const { job_title, company_name, company_img, location, salary, employment_time, employment_type, id } = jobs
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center border rounded-lg border-gray-400 p-6 my-10'>
                    <div className='flex gap-4 items-center'>
                        <div className='w-48 h-16'>
                            <img className='w-full h-full' src={company_img} alt="company-img" />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold mb-2'>{job_title}</h3>
                            <h3 className='text-lg font-bold mb-2'>{company_name}</h3>
                            <button className='btn btn-outline btn-primary'>{employment_time}</button>
                            <button className='btn btn-outline btn-primary ml-3'>{employment_type}</button>
                            <div className='flex gap-2'>
                                <h3 className='flex items-center gap-2 my-4'>
                                    <MapPinIcon className='w-6 h-6'></MapPinIcon>
                                    <p className='text-[18px]'><span className='font-bold'>Address: </span>{location}</p>
                                </h3>
                                <h3 className='flex items-center gap-2 my-4'>
                                    <CurrencyDollarIcon className='w-6 h-6'></CurrencyDollarIcon>
                                    <p className='text-[18px]'><span className='font-bold'>Salary: </span>{salary}</p>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/job/${id}`}><button className="btn btn-active btn-primary mr-5">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;