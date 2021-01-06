import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import food from "../../images/food-rounded.png";
import Footer from "../../Footer";
import UserPhotos from "../UserPhotos";
import About from "../About";
import WeirdPhotos from "../WeirdPhotos";

function Home() {
    return(
        <div>
            <Navbar selected={'Home'}/>
            <Hero/>

            <WeirdPhotos/>

            <section className="h-72 text-gray-700 body-font mt-8 px-36 mb-44 ">
                <div className="container mx-auto flex px-5 py-18  md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                    </div>
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="font-old sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About us
                        </h1>
                        <p className="mb-8 leading-relaxed text-xs text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                            air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                            chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">

                            <button
                                className="ml-4 inline-flex rounded-pill text-gray-900 bg-yellow-400 border-0 py-2 px-6 focus:outline-none  rounded text-sm mb-12">Know more
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <About/>
            <UserPhotos/>
            <div className='flex mt-0 h-96' >
                <div className='w-1/2   p-0'>
                    <iframe width="100%" height="100%" className=" w-full h-full object-cover " frameBorder="0" title="map"
                            marginHeight="0" marginWidth="0" scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            style={{height:"100%",width:"100%"}}
                    ></iframe>
                </div>
                <div className='w-1/2 bg-yellow-400 p-12'>
                    <h1 className='font-old text-4xl'>Opening Days</h1>
                    <h1 className=' text-3xl'>We'll be available</h1>
                    <div>
                        <div className='flex w-full justify-content-between   '>
                            <p className='text-left flex-grow text-lg font-weight-bold font-old'>Monday</p>
                            <p className='text-right text-white'>09:00-20:00</p>


                        </div>
                        <div className='flex w-full justify-content-between  '>
                            <p className='text-left flex-grow text-lg font-weight-bold font-old'>Tuesday</p>
                            <p className='text-right text-white'>09:00-20:00</p>


                        </div>
                        <div className='flex w-full justify-content-between  '>
                            <p className='text-left flex-grow text-lg font-weight-bold font-old'>Wednesday</p>
                            <p className='text-right text-white'>09:00-20:00</p>


                        </div>
                        <div className='flex w-full justify-content-between  '>
                            <p className='text-left flex-grow text-lg font-weight-bold font-old'>Thursday</p>
                            <p className='text-right text-white text-white'>09:00-20:00</p>


                        </div>
                        <div className='flex w-full justify-content-between '>
                            <p className='text-left flex-grow text-lg font-weight-bold font-old'>Friday</p>
                            <p className='text-right text-white'>09:00-20:00</p>


                        </div>


                    </div>


                </div>
            </div>
            <Footer/>

        </div>
    )
}
export default Home
