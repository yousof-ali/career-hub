import useStyle from "../Styles/style";

const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job
    const { btnStyle } = useStyle();
    return (
        <div className="text-gray-400   border-2 rounded-md p-4 space-y-3">
            <div className="">
                <img className="h-16"  src={logo} alt="" />
            </div>
            <h2 className="text-xl text-black font-semibold">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-4">
                <button className="border-2 bg-white p-2 rounded-md text-violet-500 border-violet-600 ">{remote_or_onsite}</button>
                <button className="border-2 bg-white p-2 rounded-md text-violet-500 border-violet-600 ">{job_type}</button>
            </div>
            <div className="text-xl flex gap-4">
                <div className="flex items-center">
                    <img src="/public/icons/location2.png" alt="" />
                    <p>{location}</p>
                </div>
                <div className="flex items-center">
                    <img src="/public/icons/money.png" alt="" />
                    <p>{salary}</p>
                </div>
                
            </div>
            <button className={btnStyle}>View Details</button>
        </div>
    );
};

export default Job;