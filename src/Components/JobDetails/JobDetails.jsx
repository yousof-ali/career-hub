import { useLoaderData, useParams } from "react-router-dom";
import useStyle from "../Styles/style";


const JobDetails = () => {
    const { id } = useParams()
    const {btnStyle}=useStyle()
    const data = useLoaderData()
    const job = data.find(single => single.id === parseInt(id));
    console.log(job)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information

    } = job
    return (
        <div>
            <div className="p-24 relative bg-[#F9F9FF] ">

                <div className="absolute left-0 bottom-0">
                    <img src="../../../public/images/bg1.png" alt="" />
                </div>
                <h2 className="text-3xl font-bold text-center  ">Job Details</h2>
                <div className=" absolute right-0 top-0 ">
                    <img className="" src="../../../public/images/bg2.png" alt="" />
                </div>
            </div>
            <div className="container mx-auto my-8 md:px-0 px-2 md:my-16 gap-4 lg:gap-12 md:grid md:grid-cols-3 justify-between">
                <div className="col-span-2 space-y-4">
                    <p className="text-gray-400 "><span className="font-bold text-black">Job Description : </span> {job_description}</p>
                    <p className="text-gray-400 "><span className="font-bold text-black">Job Responsibility : </span> {job_responsibility
                    }</p>
                    <p className="font-bold">Educational Requirements :</p>
                    <p className="text-gray-400">{educational_requirements}
                    </p>
                    <p className="font-bold">Experiences : </p>
                    <p className="text-gray-400">{experiences
                    }
                    </p>
                </div>
                <div>
                    <div className="space-y-4 p-4 mt-8 md:mt-0 rounded-xl bg-gradient-to-r from-[#F2F4FE] to-[#F5F1FE]  ">
                        <h2 className="text-xl font-bold">Job Details</h2>
                        <hr />
                        <div className="flex items-center gap-1">
                            <img src="../../../public/icons/money.png" alt="" />
                            <p className="text-gray-400"><span className="font-bold text-black">Salary : </span>{salary
                            } (Per Month)</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="../../../public/icons/calendar.png" alt="" />
                            <p className="text-gray-400"><span className="font-bold text-black">Job Title : </span>{job_title

                            }</p>
                        </div>
                        <h2 className="text-xl font-bold ">Contact Information</h2>
                        <hr />
                        <div className="flex items-center gap-1">
                            <img src="../../../public/icons/phone.png" alt="" />
                            <p className="text-gray-400"><span className="font-bold text-black">Phone : </span>{contact_information.phone

                            }</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="../../../public/icons/email.png" alt="" />
                            <p className="text-gray-400"><span className="font-bold text-black">Email : </span>{contact_information.email

                            }</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="../../../public/icons/location2.png" alt="" />
                            <p className="text-gray-400"><span className="font-bold text-black">Address : </span>{contact_information.address

                            }</p>
                        </div>
                    </div>
                    <div className="text-center mx-auto mt-4 w-full lg:w-3/5">
                        <button className={`w-full ${btnStyle}`}>Apply Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;