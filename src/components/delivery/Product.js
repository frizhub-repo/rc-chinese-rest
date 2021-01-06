import React, {useState} from "react";

import {useDispatch} from "react-redux";
import {addItem, setTotal} from "../../actions";


function Product({name,price,image,desc}) {

    const disp=useDispatch()
    const [count,setCount]=useState(0)
    const [visible, setVisible]=useState(false)

    const handleSubmit=(e)=>{
        console.log(price)
        e.preventDefault()
        const item={
            name:name,
            price:price,
            quantity:count
        }
        setCount(0)
        disp(addItem(item))
        disp(setTotal(price))

    }
    return(
        <div className=' mx-2 mt-2 rounded-t   border border-gray-300 shadow-sm' style={{width:"30%"}}>



                    <div className="block relative h-44 rounded-t hover:bg-black hover:bg-opacity-50 flex justify-content-center align-items-center overflow-hidden" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} style={{background:`url(${image})`}}>
                        <form onSubmit={handleSubmit}>
                            <button className={` ${visible ?'':'invisible'} rounded-pill px-2 py-3 bg-white font-weight-bolder`}  type='submit'><i className="fas fa-shopping-cart text-yellow-400"></i> Add to chart</button>
                        </form>

                    </div>
                    <div className="mt-4 p-2">
                        <h3 className="text-gray-900 title-font text-left text-lg font-medium">{name}</h3>
                        <h2 className=" text-gray-500 text-xs text-left tracking-widest title-font mb-2">{desc}</h2>
                        <div className='flex justify-content-between'>
                            <p className="mt-1 font-weight-bold text-yellow-400">${price}</p>
                            <input value={count} type='number' min='0' onChange={(e)=>setCount(e.target.value)} className={' border border-gray-300  p-1 rounded max-w-24 mr-1 ml-0 text-xs w-12'}/>
                        </div>
                    </div>


        </div>
        )
}

export default Product
