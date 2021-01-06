import React from 'react'

function Card() {
    return(
        <div className=' p-4 rounded-xl border border-gray-500 mx-2 shadow-sm'>
            <div className='flex justify-content-between mb-8 w-full'>
                <p className='text-xs text-gray-500 text-left flex-grow-1'> Menu first + second + dessert</p>
                <p className='text-xs text-right text-gray-500'>15$</p>
            </div>
            <p className='text-left text-xs text-gray-500 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-left text-xs text-red-500 mb-8'>50% at discount</p>
            <div className='flex justify-content-end'>
                <button className='px-2 py-2 text-white rounded-pill bg-yellow-400 '>Book this promotion</button>
            </div>
        </div>
    )
}
export default Card
