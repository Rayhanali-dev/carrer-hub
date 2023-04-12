import React from 'react';

const Blog = () => {
    return (
        <div className='mx-5 lg:mx-0'>
            <div className='bg-slate-200'>
                <h4 className='text-4xl font-bold text-center py-20'>Blog</h4>
            </div>
            <div className='max-w-7xl mx-auto mt-10'>
                <div className="collapse collapse-arrow mb-8">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        when should i use context api?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>when some data needs to be accessible by many components at different nesting levels</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-8">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What is custom hooks?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-8">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What is useRef?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>The useRef Hook allows you to persist values between renders.
                            It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-8">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What is useMemo?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>useMemo() is a function that returns a memoized value of a passed in resource-intensive function.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;