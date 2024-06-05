import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";


const Applied = () => {
    const [data, setData] = useState([]);
    const [displayjobs,setDisplayJobs]=useState([]);
    const jobs = useLoaderData()


    const handleJobfilter = filter=>{
        if(filter==="all"){
            setDisplayJobs(data);
            console.log(data)
        }
        else if (filter==="remote"){
            const remoteJobs = jobs.filter(job=>job.remote_or_onsite==='Remote');
            setDisplayJobs(remoteJobs);
            console.log(remoteJobs)
        }
        else if(filter==="onsite"){
            const onsite = jobs.filter(job=> job.remote_or_onsite==="Onsite");
            setDisplayJobs(onsite)
            console.log(onsite)
        }
        
    } 


    useEffect(() => {
        const storedID = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobData = jobs.filter(job => storedID.includes(job.id));

            const jobApplied = []
            for(const id of storedID){
                const job = jobs.find(job=>job.id==id);
                if(job){
                    jobApplied.push(job)
                }
            }
            setData(jobApplied);
            setDisplayJobs(jobApplied);

            // console.log(jobData)
        }


    }, [])

    

    return (
        <div>
            <div className="p-24 relative bg-[#F9F9FF] ">

                <div className="absolute left-0 bottom-0">
                    <img src="../../../public/images/bg1.png" alt="" />
                </div>
                <h2 className="text-3xl font-bold text-center  ">Applied Jobs</h2>
                <div className=" absolute right-0 top-0 ">
                    <img className="" src="../../../public/images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container mx-auto px-2 md:px-0" >
                <div className="flex justify-end">
                    <details className="dropdown  mt-10 relative ">
                        <summary className="m-1 btn">Filter By</summary>
                        <ul className="p-2 absolute right-0  shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                            <li><a onClick={()=>handleJobfilter("all")}>All</a></li>
                            <li><a  onClick={()=>handleJobfilter("remote")}>Remote</a></li>
                            <li><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>
                {
                    displayjobs.map(job => <SingleAppliedJob key={job.id} singleAppliedJob={job}></SingleAppliedJob>)
                }

            </div>
        </div>
    );
};

export default Applied;