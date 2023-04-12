import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../../utilities/fakedb';

const ViewDetails = () => {
    const data = useLoaderData()
    const [details, setDetails] = useState({})
    const { detailsId } = useParams();
    useEffect(() => {
        const singleData = data.find(dt => dt.id == detailsId)
        setDetails(singleData)
    }, [])

    const handleAddToDB = (id) => {
        addToDb(id)
    }

    const { description, job_responsibility, requirements, experience, job_title, salary, contact_information, location, phone, id } = details
    return (
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-7 mt-32'>
            <div>
                <h4 className='text-[18px] mb-4'><span className='font-bold text-lg'>Job Description: </span>{description}</h4>
                <h4 className='text-[18px] mb-4'><span className='font-bold text-lg'>Job Responsibility: </span>{job_responsibility}</h4>
                <h4 className='font-bold text-lg'>Educational Requirements: </h4>
                <p className='text-[18px] mb-4'>{requirements}</p>
                <h3 className='font-bold text-lg'>Experience: </h3>
                <p className='text-[18px] mb-4'>{experience}</p>
            </div>
            <div>
                <div className='border border-gray-400 p-5'>
                    <h3 className='text-lg font-bold'>Job Details</h3>
                    <div className='border bottom-1 my-3'></div>
                    <h3 className='flex items-center gap-2 my-4'>
                        <CurrencyDollarIcon className='w-6 h-6'></CurrencyDollarIcon>
                        <p className='text-[18px]'><span className='font-bold'>Salary: </span>{salary}</p>
                    </h3>
                    <h3 className='flex items-center gap-2 my-4'>
                        <BriefcaseIcon className='w-6 h-6'></BriefcaseIcon>
                        <p className='text-[18px]'><span className='font-bold'>Job Title: </span>{job_title}</p>
                    </h3>

                    <h3 className='text-lg font-bold'>Contact Information</h3>
                    <div className='border bottom-1 my-3'></div>
                    <h3 className='flex items-center gap-2 my-4'>
                        <PhoneIcon className='w-6 h-6'></PhoneIcon>
                        <p className='text-[18px]'><span className='font-bold'>Phone: </span>{phone}</p>
                    </h3>
                    <h3 className='flex items-center gap-2 my-4'>
                        <EnvelopeIcon className='w-6 h-6'></EnvelopeIcon>
                        <p className='text-[18px]'><span className='font-bold'>Email: </span>{contact_information}</p>
                    </h3>
                    <h3 className='flex items-center gap-2 my-4'>
                        <MapPinIcon className='w-6 h-6'></MapPinIcon>
                        <p className='text-[18px]'><span className='font-bold'>Address: </span>{location}</p>
                    </h3>
                </div>
                <div>
                    <button onClick={() => handleAddToDB(id)} className='w-full font-bold text-white bg-blue-500 mt-5 p-3'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;