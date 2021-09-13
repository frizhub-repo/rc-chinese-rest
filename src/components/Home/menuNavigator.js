import React, {useState} from 'react'
import cocktail from '../../images/cocktail.png'
import dinner from '../../images/dinner.png'
import  fries from '../../images/fried-potatoes.png'
import desserts from '../../images/ice-cream.png'
import breakfast from '../../images/pancakes.png'
import lunch from '../../images/take-away.png'
import select from '../../images/triangle.svg'
import Table from "./Table";
function MenuNavigator() {
    const [key,setKey]=useState(1)
    return(
        <div className='w-full '>
            <div className='flex justify-content-center mb-0'>
                <div className='mx-4' onClick={()=>setKey(1)}>
                    <div className='h-12 w-12'>
                        <img src={breakfast} className='w-full h-full object-cover'/>
                    </div>
                    <p className='text-center text-xs mt-2 mb-1'>Breakfast</p>
                    {key===1 &&
                    <div className='h-4 w-full'>
                        <img src={select} className='w-4 h-full  object-center '/>

                    </div>
                    }

                </div>
                <div className='mx-4' onClick={()=>setKey(2)}>
                    <div className='h-12 w-12'>
                        <img src={lunch} className='w-full h-full object-cover'/>
                    </div>
                    <p className='text-center text-xs mt-2 mb-1'>Lunch</p>
                    {key===2 && <div className='h-4 w-full'>
                        <img src={select} className='w-4 h-full  object-center '/>

                    </div>}
                </div>
                <div className='mx-4' onClick={()=>setKey(3)}>
                    <div className='h-12 w-12'>
                        <img src={dinner} className='w-full h-full object-cover'/>
                    </div>
                    <p className='text-center text-xs mt-2 mb-1'>Dinner</p>
                    {key===3 && <div className='h-4 w-full'>
                        <img src={select} className='w-4 h-full  object-center '/>

                    </div>}
                </div>
                <div className='mx-4' onClick={()=>setKey(4)}>
                    <div className='h-12 w-12'>
                        <img src={cocktail} className='w-full h-full object-cover'/>
                    </div>
                    <p className='text-center text-xs mt-2 mb-1'>Drinks</p>
                   {key===4 && <div className='h-4 w-full'>
                        <img src={select} className='w-4 h-full  object-center '/>

                    </div>}
                </div>
                <div className='mx-4' onClick={()=>setKey(5)}>
                    <div className='h-12 w-12'>
                        <img src={desserts} className='w-full h-full object-cover'/>
                    </div>
                    <p className='text-center text-xs mt-2 mb-1'>Desserts</p>
                  { key===5 && <div className='h-4 w-full'>
                        <img src={select} className='w-4 h-full  object-center '/>

                    </div>}
                </div>
                <div className='mx-4' onClick={()=>setKey(6)}>
                    <div className='h-12 w-12'>
                        <img src={fries} className='w-full h-full object-cover'/>
                    </div>
                    <p className='text-center text-xs mt-2 mb-1'>Fries</p>
                   { key===6 && <div className='h-4 w-full'>
                        <img src={select} className='w-4 h-full  object-center '/>

                    </div>}
                </div>
            </div>
            <div className='mt-0 px-24  flex justify-content-center -mb-44 z-10'>
                {key ==1 && <Table/>}
                {key ==2 && <Table/>}
                {key ==3 && <Table/>}
                {key ==4 && <Table/>}
                {key ==5 && <Table/>}
                {key ==6 && <Table/>}
            </div>

            <div className='h-72   z-0'>
                <img className='object-cover w-full h-full z-0' src={'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'}/>
            </div>
        </div>
    )
}

export default MenuNavigator
