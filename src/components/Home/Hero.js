import React from "react";
import Carousel from "react-multi-carousel";
import address from '../../images/address.png'
import delivery from '../../images/delivery.png'
import rating from '../../images/rating.png'
import clock from '../../images/clock.png'
import sashimi from '../../images/healthy-cuisine-food-fresh-salmon-removebg-preview.png'
import MenuNavigator from "./menuNavigator";
import Desk from '../../images/Desktop-1.png'

function Hero() {
    return(
        <section className="text-gray-700 body-font mb-4 ">
            <div className="h-80 mx-auto flex px-24 py-16 md:flex-row flex-col ">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font font-old sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-left">Make your party
                        <br className="hidden lg:inline-block"/>with delicious dishes
                    </h1>
                    <p className="mb-8 leading-relaxed text-xs text-gray-500 font-weight-bold text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                        air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                        chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-content-end w-full">

                        <button
                            className="mr-0  text-gray-900 bg-yellow-400 border-0 py-2 px-6 focus:outline-none  rounded-pill font-weight-bold text-sm">Order now
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg flex  lg:w-full md:w-1/2 w-5/6">
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="carousel-container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass="carousel-item-padding-30-px"
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1,
                                partialVisibilityGutter: 0
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 0

                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1,
                                partialVisibilityGutter: 0

                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >

                        <img className="object-cover object-center rounded w-full" alt="hero" src="https://dummyimage.com/720x600"/>
                        <img className="object-cover object-center rounded  w-full" alt="hero" src="https://dummyimage.com/720x600"/>
                        <img className="object-cover object-center rounded  w-full" alt="hero" src="https://dummyimage.com/720x600"/>
                        <img className="object-cover object-center rounded  w-full" alt="hero" src="https://dummyimage.com/720x600"/>


                    </Carousel>
                </div>
            </div>
            <div className='h-24 flex w-full px-24 mb-12 mt-4'>
                <div className='w-1/4  '>
                    <img className='object-contain  w-full h-16 ' src={clock}/>
                    <h2 className='text-lg font-weight-bold mt-2 text-gray-800'>Opening hours</h2>
                    <p className=' text-gray-500 text-center text-sm'>Lun-Ven: 9:00-20:00</p>

                </div>
                <div className='w-1/4'>
                    <img className='object-contain  w-full h-16 ' src={address}/>
                    <h2 className='text-lg font-weight-bold mt-2 text-gray-800'>Address</h2>
                    <p className=' text-gray-500 text-center text-sm'>Via Mario Rossi 13</p>

                </div>
                <div className='w-1/4'>
                    <img className='object-contain  w-full h-16' src={rating}/>
                    <h2 className='text-lg font-weight-bold text-gray-800 mt-2'>Reviews</h2>
                    <p className=' text-gray-500 text-center text-sm'>Satisfid</p>


                </div>
                <div className='w-1/4   '>
                    <img className='h-16 object-contain  w-full' src={delivery}/>
                    <h2 className='text-lg d-block  w-full mt-2 text-center font-weight-bold text-gray-800'>Delivery</h2>
                    <p className=' text-gray-500 text-center text-sm'>Min order-35</p>

                </div>
            </div>

            <div className='h-72  px-0 mt-12 w-full mb-0' style={{background:`url(${Desk}) center center`}}>
                <div className='flex px-44 justify-content-between align-items-end mt-8 mb-12'>
                    <div className='h-36 w-36 flex align-items-center  mr-4 justify-content-center rounded-circle border-4 border-white bg-black'>
                        <h1 className='text-white text-3xl text-center font-weight-bold'>25% off</h1>
                    </div>
                    <div className='h-96 w-96 ml-4'>
                        <img className='w-full h-full object-fit ' src={sashimi}/>
                    </div>
                </div>
            </div>
            <div className=' h-72 flex justify-content-center  bg-yellow-300 py-18 '>
                <div className='w-full px-36'>
                    <div className='flex justify-content-around items-end mb-10 '>
                        <div>
                            <h1 className='text-white text-left text-6xl mt-28  font-weight-bold'>Sashimi mix</h1>

                            <p className='text-left text-sm font-weight-bold max-w-md flex-grow-1 w-full'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                                Donec scelerisque sollicitudin enim eu venenatis.
                            </p>
                        </div>

                        <button
                            className="mr-0 ml-4 h-12 my-2 px-8 text-white bg-black border-0  focus:outline-none font-weight-bold rounded-pill text-sm">Order now
                        </button>
                    </div>
                </div>

            </div>
            <div className='h-72 py-18 justify-content-center mt-8 mb-44'>

                <h1 className='w-full text-center font-old text-3xl '>Our menu</h1>
                <MenuNavigator/>
            </div>

            <section className='  flex mt-72 '>

            </section>

        </section>
    )
}

export default Hero
