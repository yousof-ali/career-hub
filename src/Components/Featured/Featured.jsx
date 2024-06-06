import { useState } from "react";
import { useEffect } from "react";
import Job from "../Job/Job";
import useStyle from "../Styles/style";


const Featured = () => {
    const [dataLength,setDataLength]=useState(4)
    const { btnStyle } = useStyle();

    const [data,setData]=useState([])
    useEffect(() =>{
        fetch("/data/jobs.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">Featured Jobs</h2>
                <p className="text-gray-400 mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
                {
                    data.slice(0,dataLength).map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center mt-10 ${data.length===dataLength && "hidden"}` }>
                <button onClick={()=>setDataLength(data.length)} className={btnStyle}>Show All</button>
            </div>
        </div>
    );
};

export default Featured;