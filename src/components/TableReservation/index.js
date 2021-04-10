import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import About from "../About";
import UserPhotos from "../UserPhotos";
import Carousel from "react-multi-carousel";
import Card from "./Card";
import moduleName from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  tabsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabs: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
  },
});

function TableReservation() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  var scrollTo = function (ele) {
    let offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar selected="Res" />
      <div
        className="mt-0 flex pl-36 items-center  h-96 justify-content-start"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1452967712862-0cca1839ff27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80) center center",
        }}
      >
        <div className="border-l-4 py-4 px-2 rounded border-yellow-400 ml-24">
          <h1 className="font-old text-white font-3xl text-left">
            Table Reservation
          </h1>
        </div>
      </div>
      <h1 className="font-old text-3xl mt-8 mb-8">Table Reservation</h1>
      <div className={classes.tabsContainer}>
        <div className={classes.tabs}>
          <label>Number of People</label>
          <label>Date</label>
          <label>Services</label>
          <label>Promotions</label>
        </div>
      </div>

      {/* <section className='px-36 mt-8 flex justify-content-center'>

                <div className="text-gray-900   w-75 mb-2 	 px-0 py-0">
                    <div className="container ml-0 flex   py-0 px-0 md:flex-row flex-col ">
                        <div className="lg:max-w-lg px-0 rounded-3xl w-75 lg:w-full ml-2 md:w-1/2 w-5/6 md:mb-0">
                            <Carousel
                                additionalTransfrom={0}
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
                                        items: 1
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 1
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 1
                                    }
                                }}
                                showDots
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                                arrows={false}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                    style={{
                                        display: 'block',
                                        height: '100%',
                                        margin: 'auto',
                                        width: '100%'
                                    }}
                                    className='rounded-xl'
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                    style={{
                                        display: 'block',
                                        height: '100%',
                                        margin: 'auto',
                                        width: '100%'
                                    }}
                                    className='rounded-xl'

                                />
                                <img
                                    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                    style={{
                                        display: 'block',
                                        height: '100%',
                                        margin: 'auto',
                                        width: '100%'
                                    }}
                                    className='rounded-xl'

                                />
                                <img
                                    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                    style={{
                                        display: 'block',
                                        height: '100%',
                                        margin: 'auto',
                                        width: '100%'
                                    }}
                                    className='rounded-xl'

                                />
                                <img
                                    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                    style={{
                                        display: 'block',
                                        height: '100%',
                                        margin: 'auto',
                                        width: '100%'
                                    }}
                                    className='rounded-xl'

                                />
                            </Carousel>
                        </div>
                        <div className="lg:flex-grow leading-relaxed rounded-3xl border border-gray-500  md:w-1/2  ml-3  shadow-sm	px-4 py-4 flex flex-col md:items-start md:text-left  ">
                            <div className=' d-flex justify-content-around w-full px-0 ml-0  '>
                                <h2 className=" sm:text-3xl  text-xl mb-2 flex-grow-1 font-weight-bold text-yellow-400   ">Arcane</h2>
                                <h2 className="sm:text-3xl  text-3xl mb-2  ">8.3<span className='text-xs '>/10</span></h2>
                            </div>
                            <div className=' d-flex justify-content-around w-full  py-1'>

                                <p className='w-50 text-xs flex-grow-1 leading-relaxed text-gray-500'>Viale san Michele del carso 7 Milan 20144</p>


                                <span className=' text-xs text-indigo-500	  '>See on map</span>


                            </div>
                            <div className='w-full'>
                                <p className=" leading-relaxed text-sm w-full py-1 text-gray-500">Average price 38 accepts returns</p>
                                <p className=" leading-relaxed text-sm w-full text-red-500 py-1 px-1    font-weight-bold">-50% at checkout</p>

                                <div className="flex justify-center">
                                    <button
                                        className="inline-flex text-white bg-yellow-400 mt-4 font-weight-bold hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-lg">Book nup to 50%
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
            <div className='w-full flex justify-content-center'>
                <div className='w-full flex justify-content-center px-24 mb-8 mt-8'>
                    <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('menu')}>Menu</button>
                    <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('promotions')}>Promotions</button>
                    <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('photos')}>User photos</button>
                    <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('reviews')}>Reviews</button>
                    <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('info')}>Info</button>
                </div>
            </div>

            <div className='w-full flex justify-content-center'>
                <div className='py-2  place-content-start w-75 px-36 '>
                    <p className='  text-left text-sm font-weight-bold mb-1 w-full text-black' id='menu'>Chef: <span className='text-gray-500'>Mario Rossi</span> </p>
                    <p className='  text-left font-weight-bold w-full text-sm text-black mb-4'>Average price: <span className='text-gray-500'>38$</span> </p>
                    <div className=' mr-0  w-full min-w-2/3  '>
                        <div className='d-flex justify-content-around w-full mb-2'>
                            <div className='flex-grow-1 py-2 '>
                                <h6 className='text-left font-weight-bold text-sm text-black'>Pizza margherita pomodoro mozzarella vongole</h6>
                                <p className='text-xs text-left'>Pomodoro mozzarella</p>
                            </div>
                            <div>
                                <span className='text-lg py-2  font-weight-bold text-black text-right'>15$</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around w-full mt-2'>
                            <div className='flex-grow-1'>
                                <h6 className='text-left font-weight-bold text-sm text-black'>Pizza margherita</h6>
                                <p className='text-xs text-left'>Pomodoro mozzarella</p>
                            </div>
                            <div>
                                <span className='text-lg py-2  font-weight-bold text-black text-right'>15$</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around w-full mt-2'>
                            <div className='flex-grow-1'>
                                <h6 className='text-left font-weight-bold text-sm text-black'>Pizza margherita</h6>
                                <p className='text-xs text-left'>Pomodoro mozzarella</p>
                            </div>
                            <div>
                                <span className='text-lg py-2  font-weight-bold text-black text-right'>15$</span>
                            </div>
                        </div>
                        <div className=' text-left w-full mt-2'>

                            <h6 className='text-left font-weight-bold text-sm text-black'>Food Options</h6>
                            <p className='text-xs text-left w-full'>vegan</p>

                            <div className='flex justify-content-end'>
                                <button
                                    className="  inline-flex text-white bg-yellow-400 font-weight-bold hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-lg">See full menu
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className=' mr-0  w-full min-w-2/3  mt-8'>
                        <h1 className='font-old text-left text-xl mb-8' id='promotions'>Our promotions</h1>
                        <div className='w-full '>
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
                                        items: 2,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30
                                    }
                                }}
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >

                                <Card/>
                                <Card/>
                                <Card/>

                            </Carousel>
                        </div>
                    </div>

                </div>
            </div> */}
      <h1 className="font-old text-3xl mt-8" id={"photos"}>
        {" "}
        User photos
      </h1>
      <p className="text-sm text-gray-500 mt-8 px-44 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex, in pretium orci vestibulum eget.
      </p>
      <UserPhotos />
      <div className="w-full flex justify-content-center">
        <section
          id="info"
          className="text-gray-700 body-font w-75 px-44 mt-8 mb-8"
        >
          <div className="container  py-4 mx-auto w-full">
            <div className="flex flex-col text-left w-full mb-4">
              <h1
                className="sm:text-3xl text-2xl font-medium font-old text-center  title-font mb-4 text-gray-900"
                id="info"
              >
                Other informations
              </h1>
              <div className="w-full p-3 ">
                <div className="mb-3">
                  <h6 className="text-gold font-weight-bold text-xs">Info</h6>
                  <p className="text-gray-500 text-xs font-weight-bold">
                    info about the restaurant
                  </p>
                </div>
                <div className="mb-3">
                  <h6 className="text-gold font-weight-bold text-xs">Info</h6>
                  <p className="text-gray-500 text-xs font-weight-bold">
                    info about the restaurant
                  </p>
                </div>
                <div className="mb-3">
                  <h6 className="text-gold font-weight-bold text-xs">Info</h6>
                  <p className="text-gray-500 text-xs font-weight-bold">
                    info about the restaurant
                  </p>
                </div>
                <div className="mb-3">
                  <h6 className="text-gold font-weight-bold text-xs">Info</h6>
                  <p className="text-gray-500 text-xs font-weight-bold">
                    info about the restaurant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="reviews">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default TableReservation;
