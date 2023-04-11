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
            {
                applyJob?.map(jobs => <AppliedJobs jobs={jobs} key={jobs.id}></AppliedJobs>)
            }
        </div>
    );
};

export default Apply;