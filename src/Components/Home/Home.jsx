import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <div className="space-y-16 mb-16">
            <Bannar></Bannar>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;