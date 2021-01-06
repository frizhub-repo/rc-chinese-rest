import React from "react";
import Item from "./Item";

function Table({items}) {
    return(
        <div className=' flex flex-wrap  border-t-4 border-yellow-400 border-b-4  z-10 -mt-1    '>
            <Item name={'American slab'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'} price={15}/>
            <Item name={'American slab'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'} price={15}/>
            <Item name={'American slab'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'} price={15}/>
            <Item name={'American slab'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'} price={15}/>
            <Item name={'American slab'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'} price={15}/>
            <Item name={'American slab'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'} price={15}/>
            <Item name={'American slab'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'} price={15}/>
        </div>
    )
}
export default Table
