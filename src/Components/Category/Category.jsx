import { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory/SingleCategory";


const Category = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("/public/data/categories.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div >
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">Job Category List</h2>
                <p className="text-gray-400 mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4  container mx-auto gap-4">
                {
                    data.map(category=><SingleCategory key={category.id} category={category}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Category;