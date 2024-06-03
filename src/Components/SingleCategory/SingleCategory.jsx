

const SingleCategory = ({category}) => {
    const {logo,category_name,availability}=category
    return ( 
        <div className="bg-[#F9F9FF] p-4 rounded-md">
            <div className="mb-6 w-10">
                <img src={logo} alt="" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-2">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default SingleCategory;