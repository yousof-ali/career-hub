import React from 'react';
import useStyle from '../Styles/style';
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ singleAppliedJob }) => {
    const{btnStyle}=useStyle()
    const { id, logo, job_type, company_name, job_title, location, salary, remote_or_onsite } = singleAppliedJob
    console.log(singleAppliedJob)
    return (
        <div>
            <div className='md:flex items-center justify-between  p-4 border-2 rounded-xl my-10'>
                <div className='md:flex items-center gap-8 '>
                    <div className='h-16 '>
                        <img className='h-full' src={logo} alt="" />
                    </div>
                    <div className='text-gray-400 space-y-4'>
                        <h2 className='text-xl font-bold text-black'>{job_title}</h2>
                        <p className='text-xl'>{company_name}</p>
                        <div className='flex gap-4'>
                            <button className='border-2 border-violet-500 text-violet-500 rounded-md p-2'>{remote_or_onsite}</button>
                            <button className='border-2 border-violet-500 text-violet-500 rounded-md p-2'>{job_type}</button>
                        </div>
                        <div className="text-base flex gap-4">
                            <div className="flex items-center">
                                <img src="/public/icons/location2.png" alt="" />
                                <p>{location}</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/public/icons/money.png" alt="" />
                                <p>{salary}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                <Link to={`/job/${id}`}><button className={btnStyle}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleAppliedJob;