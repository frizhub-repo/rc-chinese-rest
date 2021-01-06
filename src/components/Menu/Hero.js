import React from "react";

function Hero(){
 return(
     <div className=' flex pl-36 items-center  h-96 justify-content-start' style={{background:'url(https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80) center center'}}>
        <div className='border-l-4 py-4 px-2 rounded border-yellow-400 ml-24'>
            <h1 className='font-old text-white font-3xl text-left'>
                Food Menu
            </h1>
            <div className='flex justify-content-start'>
                <a className='text-yellow-400 text-sm mr-4' href='/home'>Home</a>
                <p className='text-white text-sm '>Menu</p>
            </div>


        </div>
     </div>
 )
}

export default Hero
