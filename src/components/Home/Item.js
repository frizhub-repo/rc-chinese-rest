import React from "react";

function Item({name,desc,img}) {
    return(
        <div className="p-2 lg:w-1/2 md:w-1/2  mb-1">
            <div className="h-full flex items-center   rounded-lg">
                <img alt="team"
                     className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                     src="https://dummyimage.com/80x80"/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg text-left font-weight-bold">{name}</h2>
                        <p className="text-gray-500 text-xs text-left">{desc}</p>
                    </div>
            </div>
        </div>
    )
}

export default Item
