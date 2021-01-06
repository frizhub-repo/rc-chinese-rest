import React from 'react'

function Card({name,image}) {
    return(
        <div className=" rounded-xl rounded-t  mx-2 shadow-sm border border-gray-300">
            <a className="block relative h-36  overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                     src={image}/>
            </a>
            <div className="mt-4 py-2 px-3">
                <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
            </div>
        </div>
    )
}

export default Card
