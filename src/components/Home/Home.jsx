import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/41389-interview-get-ready-to-work-job-recruitment-isometric-hiring-process.json";
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const categoryList = useLoaderData();
    // const jobPosting = useLoaderData();
    console.log(categoryList);
    return (
        <div>
            {/* banner part start */}
            <div className='bg-slate-200'>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <div className='w-2/4'>
                        <h3 className='text-7xl font-bold mb-8 pr-32'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h3>
                        <p className='text-[#757575] pr-40 mb-5 text-[18px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-active btn-secondary mb-20">Get Started</button>
                    </div>
                    <div className='w-2/4 text-right'>
                        <Lottie animationData={groovyWalkAnimation} loop={true} />;
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
                <div className='grid grid-cols-4 gap-6 mb-14'>
                    {
                        categoryList.map(category => <Category category={category} key={category.title}></Category>)
                    }
                </div>
            </section>

            {/* job category part end */}
        </div>
    );
};

export default Home;