import { Link, useNavigate } from "react-router-dom";
import useStyle from "../Styles/style";
const CommingSoon = () => {
    const navigate = useNavigate();
    const handleclk = () => {
        navigate(-1);
    }
    const { btnStyle } = useStyle()
    return (
        <div className="flex justify-center items-center text-center h-[62vh]">
            <div>
                <h2 className="text-center mb-8 text-3xl font-bold">Comming Soon!!</h2>
                <Link onClick={handleclk}><button className={btnStyle}>Go Back</button></Link>
            </div>
        </div>
    );
};

export default CommingSoon;