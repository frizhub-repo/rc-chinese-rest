import React, {useState} from 'react'
import food from "../../images/food-rounded.png";
import { Avatar } from 'rsuite';
import {MDBIcon} from "mdbreact";


function About() {

    const [index,setIndex]=useState(0)

    function handleChange(mode) {
        if (index==0 && mode=='back'){
            setIndex(testimonial.length-1)

        }
        else if(index==testimonial.length-1 && mode=='forward'){
            setIndex(0)

        }
        else if(mode=='forward'){
            setIndex(index=>index+1)
        }
        else{
            setIndex(index=>index-1)
        }
    }


    const testimonial=[
        {
        name:'Alex',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis, auctor consequat urna.',
        image:'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
    },
        {
            name:'Penny',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis, auctor consequat urna.',
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            name:'Robert',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis, auctor consequat urna.',
            image:'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            name:'Bob',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis, auctor consequat urna.',
            image:'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1002&q=80'
        }]

    console.log(testimonial[index])


    return(
        <div className='flex mt-4 h-96 '>
            <div className='w-1/3 h-full bg-yellow-400'>

            </div>
            <div className='w-full -ml-64 flex'>
                <div className='w-1/2 px-0'>
                    <img className='object-cover h-full w-full' src={food}/>
                </div>
                <div className='w-1/2 px-12 mr-24 pt-12'>
                    <h1 className='text-xl font-old'>What people say about us</h1>
                    <p className='text-sm text-gray-500 mt-4 mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                        'pulvinar facilisis justo mollis, auctor consequat urna.
                    </p>
                    <div className='w-full flex justify-content-center align-items-center'>
                        <div className='w-1/4 flex justify-content-center align-items-center'>
                            <Avatar size='md' circle alt='AV' src={index==0? testimonial[testimonial.length-1].image :testimonial[index-1].image}/>
                        </div>
                        <div className='w-1/2 flex justify-content-center align-items-center'>
                            <Avatar size='lg' circle alt='AV' src={testimonial[index].image}/>

                        </div>
                        <div className='w-1/4 flex justify-content-center align-items-center'>
                            <Avatar size='md' circle alt='AV' src={ index==testimonial.length-1? testimonial[0].image :testimonial[index+1].image}/>

                        </div>
                    </div>

                    <h1 className='text-lg text-gray-800'> {testimonial[index].name}
                    </h1>
                    <p className='text-sm text-gray-500 mt-4'>
                        {testimonial[index].text}
                    </p>
                    <div className='flex justify-content-around mt-4 '>
                        <MDBIcon icon="angle-left" className='mr-2 ' onClick={()=>handleChange('back')}/>
                        <MDBIcon icon="angle-right" onClick={()=>handleChange('forward')} />
                    </div>

            </div>
            </div>
        </div>

    )
}

export default About
