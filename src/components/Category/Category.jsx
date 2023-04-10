import React from 'react';

const Category = ({category}) => {
    const {img, title, job} = category
    return (
        <div className='bg-[#b8bfeb] p-4'>
            <img className='mb-3' src={img} alt="" />
            <h3 className='text-2xl mb-3 font-bold'>{title}</h3>
            <p>{job}+ Jobs Available</p>
        </div>
    );
};

export default Category;