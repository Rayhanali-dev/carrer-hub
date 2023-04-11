import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

const Apply = () => {
    const data = useLoaderData()
    const [applyJob, setApplyJob] = useState([])
    useEffect(() => {
        const storedJob = getShoppingCart()
        let newArr = []
        for(const id in storedJob){
            if(data) {
                const jobs = data.find(job => job.id == id)
                newArr.push(jobs)
            }
        }
        setApplyJob(newArr)
    },[data])
    console.log(applyJob);
    return (
        <div>
            <div className='bg-slate-200'>
                <h4 className='text-4xl font-bold text-center py-20'>Applied Jobs</h4>
            </div>
            <div className='max-w-7xl mx-auto text-right mt-12'>
                <button className='btn btn-outline mr-7'>Remote</button>
                <button className='btn btn-outline'>Onsite</button>
            </div>
            {
                applyJob?.map(jobs => <AppliedJobs jobs={jobs} key={jobs.id}></AppliedJobs>)
            }
        </div>
    );
};

export default Apply;