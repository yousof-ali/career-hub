import useStyle from "../Styles/style";
import user from "/images/user.png"

const Bannar = () => {
    const { btnStyle } = useStyle();
    return (
        <div className="bg-[#F9F9FF]">
            <div className=" md:flex justify-center container mx-auto p-2 md:p-0 items-center gap-8">
                <div className="flex-1 ">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-5xl ">One Step Closer To Your <br /><span className="text-[#9675FA]">Dream Job</span></h2>
                        <p className="text-gray-400">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className={btnStyle}>Get Started</button>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Bannar;