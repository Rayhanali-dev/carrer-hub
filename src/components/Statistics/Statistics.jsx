import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const Statistics = () => {
    const data = [
        {
            id: 1,
            assignment_name: "HTML CSS & Github",
            assignment_marks: 60
        },
        {
            id: 2,
            assignment_name: "Responsive Web Layout",
            assignment_marks: 60
        },
        {
            id: 3,
            assignment_name: "CSS Frameworks",
            assignment_marks: 60
        },
        {
            id: 4,
            assignment_name: "JavaScript",
            assignment_marks: 52
        },
        {
            id: 5,
            assignment_name: "Intregrate JavaScript",
            assignment_marks: 58
        },
        {
            id: 6,
            assignment_name: "Api",
            assignment_marks: 60
        },
        {
            id: 7,
            assignment_name: "Debugging",
            assignment_marks: 60
        }
    ]
    return (
        <div className='mx-auto max-w-7xl'>
            <AreaChart
                width={1320}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment_name" />
                <YAxis dataKey="assignment_marks" />
                <Tooltip />
                <Area type="monotone" dataKey="assignment_name" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="assignment_marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;