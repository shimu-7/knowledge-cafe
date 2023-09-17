
import { useEffect, useState } from "react";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./Cart";


const Carts = () => {
    const [carts, setCarts] = useState([])
    const [res, setRes] = useState(20);
    const [credit, setCredit] = useState(0);
    const [price,setPrice]=useState(0);
    const [selectedCourse, setSelectedCourse] = useState([]);
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
    const ToastNotification1 = () => toast("This course is already selected.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000});
        const ToastNotification2 = () => toast("20 Credit exceeded", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000});
    

    const handleCredit = cart => {
        // console.log(cart);
        const newCredit=credit+cart.credit;
       const check=selectedCourse.filter(course=>course.course_name===cart.course_name)
       if(check.length===0 && newCredit<=20){
        const newSelected = [...selectedCourse, cart];
        setSelectedCourse(newSelected);
        const rem=res-cart.credit
        setRes(rem);
        // console.log(res-cart.credit)
        setCredit(newCredit)
        setPrice(price+cart.price)
       }
       else if(newCredit>20 && check.length>0 ){
        ToastNotification1(); 
        ToastNotification2(); 
       }
       else if(newCredit>20){
        ToastNotification2();   
       }
       else{
        // console.log(check);
        // console.log("already selected")
        ToastNotification1();       
       }
    }
    
    return (
        <>
            <div className=" flex flex-col lg:flex-row mx-auto my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        carts.map(cart => <Cart key={cart.course_name} handleCredit={handleCredit} cart={cart}></Cart>)
                    }
                </div>
                <div className="w-[300px] h-1/3 ml-5 shadow-lg px-4 py-4">
                    <h3 className="text-blue-500 font-medium mb-2">Credit Hour Remaining {res} hr</h3>
                    <hr />
                    <h3 className="text-lg font-bold">Course Name</h3>
                    <div className="my-2">
                        <ol type="1">
                            {
                                selectedCourse.map((course, idx) => <li key={course.course_name}>{idx + 1}. {course.course_name}</li>)
                            }
                        </ol>
                        <ToastContainer />
                    </div>
                    <hr />
                    <h3 className="my-2">Total Credit Hour: {credit} </h3>
                    <hr />
                    <h3 className="my-2">Total Price: {price} </h3>
                </div>
            </div>
        </>
    );
};

export default Carts;