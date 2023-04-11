import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./../../../public/lottie.json";
import Category from './../Category/Category';

const Home = () => {
    const [jobs, setJobs] = useState([])
    const [show, setShow] = useState(true)
    const [categoryList, setCategoryList] = useState([])

    useEffect( () => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategoryList(data))
    }, [])

    useEffect(() => {
        fetch('jobPosting.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className='px-5 lg:px-0'>
            {/* banner part start */}
            <div className='bg-slate-200'>
                <div className='max-w-7xl mx-auto md:flex items-center justify-between'>
                    <div className='md:w-2/4 text-center md:text-left'>
                        <h3 className='text-3xl md:text-7xl font-bold mb-8 md:pr-32'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h3>
                        <p className='text-[#757575] md:pr-40 mb-5 text-[18px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-active btn-secondary mb-20">Get Started</button>
                    </div>
                    <div className='md:w-2/4 text-right'>
                        <Lottie animationData={groovyWalkAnimation}  loop={true} />
                    </div>
                </div>
            </div>
            {/* banner part end */}

            {/* job category part start */}
            <section className='max-w-7xl mx-auto'>
                <div>
                    <h2 className='text-center text-3xl font-bold mt-12 mb-5'>Job Category List</h2>
                    <p className='text-center text-[20px] mb-10 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14'>
                    {
                        categoryList.map((category, index) => <Category category={category} key={index}></Category>)
                    }
                </div>
            </section>
            {/* job category part end */}

            {/* feature jobs part start */}

            <section className='max-w-7xl mx-auto'>
                <div>
                    <h2 className='text-center text-3xl font-bold mt-12 mb-5'>Featured Jobs</h2>
                    <p className='text-center text-[20px] mb-10 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mb-14'>
                    {
                        show ? jobs.slice(0, 4).map(job => <Job job={job} key={job.id}></Job>) : jobs.map(job => <Job job={job} key={job.id}></Job>)
                    }
                </div>
                <div className='my-10 text-center'>
                    {
                        show ? <button onClick={() => setShow(!show)} className='btn btn-primary'>See More</button> : <button onClick={() => setShow(!show)} className='btn btn-primary'>See Less</button>
                    }
                </div>
            </section>
            {/* feature jobs part end */}
        </div>
    );
};

export default Home;