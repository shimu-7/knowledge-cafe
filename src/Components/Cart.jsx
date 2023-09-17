
const Cart = ({ cart , handleCredit}) => {
    // console.log(cart);
    
     //console.log(handleCredit)
    return (
       
        <div>

            {

                <div className="w-[300px] px-2 py-3 shadow-lg">
                    <div >
                    <img className="w-full h-40" src={cart.image} alt="" />
                    </div>
                    <h4 className="text-lg font-semibold">{cart.course_name}</h4>

                    <p className="text-slate-500 font-normal">{cart.details}</p>

                    <div className="mt-2 flex flex-row justify-center items-center gap-3">
                        <div className="w-4 h-4">
                        <img  src="https://i.ibb.co/zrvQnCs/Dollar.png" alt="" />
                        </div>
                        <h3>Price: {cart.price}</h3>
                        <div className="w-4 h-4">
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLTmVrocYDWPLt8XywVWK_ozgTl7N-s0IXA&usqp=CAU" alt="" />
                        </div>
                        <h3>Credit: {cart.credit}hr</h3>
                    </div>
                    <div  className="text-center text-white font-medium mt-3 ">
                    <button className=" w-72 bg-blue-500 rounded-lg" onClick={()=>handleCredit(cart)}>Select</button>
                    
                    </div>

                </div>
            }
        </div>
    );
};

export default Cart;