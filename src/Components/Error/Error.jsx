import { Link, useNavigate, useRouteError } from "react-router-dom";
import useStyle from "../Styles/style";


const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate();
    const {btnStyle}=useStyle()
    console.log(error.data)
    return (
        <div className="container mx-auto text-center space-y-4">
            <h1 className="text-4xl">Opps</h1>
            <p className="text-2xl">Your response is : <i>{error.status || error.statusText}</i></p>
            <i className=" block mb-8">{error.data}</i>

            <br />

            <Link to={navigate(-1)}><button className={btnStyle}>Go Back</button></Link>
        </div>
    );
};

export default Error;