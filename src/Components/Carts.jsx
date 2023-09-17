import { useEffect, useState } from "react";
import Cart from "./Cart";

const Carts = () => {
    const [carts, setCarts] = useState([])
    const [res,setRes]=useState(20);
    const [credit,setCredit]=useState(0);
    const [selectedCourse,setSelectedCourse]=useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    // console.log(1);
    // const handleCredit = cart =>{
    //     console.log(cart);
    //     console.log(1);
       
    // }
    const handleCredit= cart =>{
        console.log(cart);
        const newSelected=[...selectedCourse,cart];
        setSelectedCourse(newSelected);
    }
    
    return (
        <>
            <div className="flex mx-5 my-5">
                <div className="grid grid-cols-3 gap-2">
                    {
                        carts.map(cart => <Cart key={cart.course_name} handleCredit={handleCredit} cart={cart}></Cart>)
                    }
                </div>
                <div className="w-[350px] h-1/3 ml-5 shadow-lg px-4 py-4">
                    <h3 className="text-blue-500 font-medium mb-2">Credit Hour Remaining {res} hr</h3>
                    <hr />
                    <h3 className="text-lg font-bold">Course Name</h3>
                    <div className="my-2">
                        <ol type="1">
                            {
                                selectedCourse.map((course,idx)=><li key={course.course_name}>{idx+1}. {course.course_name}</li>)
                            }
                        </ol>
                    </div>
                    <hr />
                    <h3>Total Credit Hour: {credit} </h3>
                </div>
            </div>
        </>
    );
};

export default Carts;