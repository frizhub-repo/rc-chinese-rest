//navbar page
// import React from "react";
// import { Link } from "react-router-dom";
// import { useRestaurantContext } from "../../Context/restaurantContext";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import CustomMenu from "./CustomMenu";

// function Navbar({ selected }) {
//   let { token, setToken, restaurant } = useRestaurantContext();
//   console.log({ token });
//   const logout = () => {
//     window.localStorage.removeItem("token");
//     window.location.reload();
//   };

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <header className="text-gray-700 body-font bg-yellow-400 px-24">
//         <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
//           {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">tailblocks</span>
//           </a> */}
//           <Link to="/">
//             <img
//               style={{ height: "50px" }}
//               src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
//               className="object-cover"
//             />
//           </Link>
//           <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//             <Link
//               to="/"
//               className={`mr-5 text-white text-sm ${
//                 selected == "Home" ? "rounded-pill px-2 py-1 bg-black " : ""
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/menu"
//               className={`mr-5 text-white text-sm ${
//                 selected == "Menu" ? "rounded-pill px-2 py-1 bg-black " : ""
//               }`}
//             >
//               Menu
//             </Link>
//             <Link
//               to="/delivery"
//               className={`mr-5 text-white text-sm ${
//                 selected == "Delivery" ? "rounded-pill px-2 py-1 bg-black " : ""
//               }`}
//             >
//               Delivery
//             </Link>
//             <Link
//               to="/tableRes"
//               className={`mr-5 text-white text-sm ${
//                 selected == "Res" ? "rounded-pill px-2 py-1 bg-black " : ""
//               }`}
//             >
//               Table Reservation
//             </Link>
//             <Link
//               to="/contact"
//               className={`mr-5 text-white text-sm ${
//                 selected == "Contact" ? "rounded-pill px-2 py-1 bg-black " : ""
//               }`}
//             >
//               Contact us
//             </Link>
//           </nav>
//           {!token ? (
//             <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none  rounded-pill text-xs mt-2 md:mt-0">
//               <Link
//                 to="/auth"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 Login/Signup
//               </Link>
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 className="w-4 h-4 ml-1"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//               </svg>
//             </button>
//           ) : (
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 cursor: "pointer",
//               }}
//             >
//               <AccountCircleIcon
//                 onClick={handleClick}
//                 fontSize="large"
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           )}
//           <CustomMenu
//             handleClose={handleClose}
//             anchorEl={anchorEl}
//             logout={logout}
//           />
//           {/* <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none  rounded-pill text-xs mt-2 md:mt-0">
//             <Link to="/auth" style={{ textDecoration: "none", color: "black" }}>
//               Login/Signup
//             </Link>
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button> */}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Navbar;

//home page
{
  /* <section className="h-72 text-gray-700 body-font mt-8 px-36 mb-44 ">
<div className="container mx-auto flex px-5 py-18  md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <img
      className="object-cover object-center rounded"
      alt="hero"
      src="https://dummyimage.com/720x600"
    />
  </div>
  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className="font-old sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      About us
    </h1>
    <p className="mb-8 leading-relaxed text-xs text-left">
      Copper mug try-hard pitchfork pour-over freegan heirloom neutra
      air plant cold-pressed tacos poke beard tote bag. Heirloom echo
      park mlkshk tote bag selvage hot chicken authentic tumeric
      truffaut hexagon try-hard chambray.
    </p>
    <div className="flex justify-center">
      <button className="ml-4 inline-flex rounded-pill text-gray-900 bg-yellow-400 border-0 py-2 px-6 focus:outline-none  rounded text-sm mb-12">
        Know more
      </button>
    </div>
  </div>
</div>
</section>

<About />
<UserPhotos /> */
}

//home compoenent
{
  /* <div className="w-1/2 bg-yellow-400 p-12">
<h1 className="font-old text-4xl">Opening Days</h1>
<h1 className=" text-3xl">We'll be available</h1>
<div>
  {openingHours.length > 0 &&
    openingHours.map((item) => (
      <div className="flex w-full justify-content-between   ">
        <p className="text-left flex-grow text-lg font-weight-bold font-old">
          {item?.openDay}
        </p>
        <p className="text-right text-white">
          {item?.openTime} - {item?.closeTime}
        </p>
      </div>
    ))}
  {/* <div className="flex w-full justify-content-between   ">
    <p className="text-left flex-grow text-lg font-weight-bold font-old">
      Monday
    </p>
    <p className="text-right text-white">09:00-20:00</p>
  </div>
  <div className="flex w-full justify-content-between  ">
    <p className="text-left flex-grow text-lg font-weight-bold font-old">
      Tuesday
    </p>
    <p className="text-right text-white">09:00-20:00</p>
  </div>
  <div className="flex w-full justify-content-between  ">
    <p className="text-left flex-grow text-lg font-weight-bold font-old">
      Wednesday
    </p>
    <p className="text-right text-white">09:00-20:00</p>
  </div>
  <div className="flex w-full justify-content-between  ">
    <p className="text-left flex-grow text-lg font-weight-bold font-old">
      Thursday
    </p>
    <p className="text-right text-white text-white">09:00-20:00</p>
  </div>
  <div className="flex w-full justify-content-between ">
    <p className="text-left flex-grow text-lg font-weight-bold font-old">
      Friday
    </p>
    <p className="text-right text-white">09:00-20:00</p>
  </div> */
}
// </div>
// </div> */}

{
  /* <div className="flex mt-0 h-96">
<div className="w-1/2   p-0">
  <iframe
    width="100%"
    height="100%"
    className=" w-full h-full object-cover "
    frameBorder="0"
    title="map"
    marginHeight="0"
    marginWidth="0"
    scrolling="no"
    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
    style={{ height: "100%", width: "100%" }}
  ></iframe>
</div>
</div> */
}

//table resevation

// <div className="border-l-4 py-4 px-2 rounded border-yellow-400 ml-24">
//           <h1 className="font-old text-white font-3xl text-left">
//             Table Reservation
//           </h1>
//         </div>
//       </div>
//       <h1 className="font-old text-3xl mt-8 mb-8">Table Reservation</h1>
//       <div className={classes.tabsContainer}>
//         <div className={classes.tabs}>
//           <label
//             className={activeTab === 0 ? classes.activeText : classes.text}
//             onClick={() => setActiveTab(0)}
//           >
//             Number of People
//           </label>
//           <label
//             className={activeTab === 1 ? classes.activeText : classes.text}
//             onClick={() => setActiveTab(1)}
//           >
//             Date
//           </label>
//           <label
//             className={activeTab === 2 ? classes.activeText : classes.text}
//             onClick={() => setActiveTab(2)}
//           >
//             Services
//           </label>
//           <label
//             className={activeTab === 3 ? classes.activeText : classes.text}
//             onClick={() => setActiveTab(3)}
//           >
//             Schedule
//           </label>
//           {/* <label
//             className={activeTab === 3 ? classes.activeText : classes.text}
//             onClick={() => setActiveTab(3)}
//           >
//             Promotions
//           </label> */}
//         </div>
//         {activeTab === 0 && (
//           <Box className={classes.container}>
//             <NumberOfPeople number={number} setNumber={setNumber} />
//           </Box>
//         )}
//         {activeTab === 1 && (
//           <DayPicker
//             onDayClick={(day) => {
//               debugger;
//               setSelectedDay(day);
//             }}
//             modifiers={modifiers}
//             modifiersStyles={modifiersStyles}
//             val
//           />
//         )}
//         {activeTab === 2 && (
//           <Box display="flex" flexWrap="wrap" width="35%">
//             <ServiceButton
//               services={services}
//               setServices={setServices}
//               data="breakfast"
//               text="Breakfast"
//             />
//             <ServiceButton
//               services={services}
//               setServices={setServices}
//               data="lunch"
//               text="Lunch"
//             />
//             <ServiceButton
//               services={services}
//               setServices={setServices}
//               data="dinner"
//               text="Dinner"
//             />
//           </Box>
//         )}
//         {activeTab === 3 && (
//           <>
//             <Box mt="18%" display="flex" flexDirection="column">
//               <TimePicker
//                 onChange={(time) => {
//                   console.log({ time });
//                   setTime(time);
//                 }}
//                 value={time}
//                 isOpen={true}
//               />
//             </Box>
//             {token ? (
//               <button
//                 className="px-12 py-3 text-black text-center text-sm mb-12"
//                 style={{
//                   backgroundColor: "#ffc107",
//                   color: "#fff",
//                   width: "40%",
//                   borderRadius: "6px",
//                   marginTop: "20px",
//                 }}
//                 onClick={tableReserve}
//               >
//                 {loading && (
//                   <CircularProgress
//                     color="inherit"
//                     size={20}
//                     style={{ marginRight: "8px" }}
//                   />
//                 )}
//                 Book Now
//               </button>
//             ) : (
//               <Link to="/auth">
//                 <Box mt="20px">Please login to reserve your table</Box>
//               </Link>
//             )}
//           </>
//         )}
//       </div>

//       {/* <section className='px-36 mt-8 flex justify-content-center'>

//                 <div className="text-gray-900   w-75 mb-2 	 px-0 py-0">
//                     <div className="container ml-0 flex   py-0 px-0 md:flex-row flex-col ">
//                         <div className="lg:max-w-lg px-0 rounded-3xl w-75 lg:w-full ml-2 md:w-1/2 w-5/6 md:mb-0">
//                             <Carousel
//                                 additionalTransfrom={0}
//                                 autoPlaySpeed={3000}
//                                 centerMode={false}
//                                 className=""
//                                 containerClass="carousel-container"
//                                 dotListClass=""
//                                 draggable
//                                 focusOnSelect={false}
//                                 infinite
//                                 itemClass="carousel-item-padding-30-px"
//                                 keyBoardControl
//                                 minimumTouchDrag={80}
//                                 renderButtonGroupOutside={false}
//                                 renderDotsOutside={false}
//                                 responsive={{
//                                     desktop: {
//                                         breakpoint: {
//                                             max: 3000,
//                                             min: 1024
//                                         },
//                                         items: 1
//                                     },
//                                     mobile: {
//                                         breakpoint: {
//                                             max: 464,
//                                             min: 0
//                                         },
//                                         items: 1
//                                     },
//                                     tablet: {
//                                         breakpoint: {
//                                             max: 1024,
//                                             min: 464
//                                         },
//                                         items: 1
//                                     }
//                                 }}
//                                 showDots
//                                 sliderClass=""
//                                 slidesToSlide={1}
//                                 swipeable
//                                 arrows={false}
//                             >
//                                 <img
//                                     src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//                                     style={{
//                                         display: 'block',
//                                         height: '100%',
//                                         margin: 'auto',
//                                         width: '100%'
//                                     }}
//                                     className='rounded-xl'
//                                 />
//                                 <img
//                                     src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
//                                     style={{
//                                         display: 'block',
//                                         height: '100%',
//                                         margin: 'auto',
//                                         width: '100%'
//                                     }}
//                                     className='rounded-xl'

//                                 />
//                                 <img
//                                     src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//                                     style={{
//                                         display: 'block',
//                                         height: '100%',
//                                         margin: 'auto',
//                                         width: '100%'
//                                     }}
//                                     className='rounded-xl'

//                                 />
//                                 <img
//                                     src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//                                     style={{
//                                         display: 'block',
//                                         height: '100%',
//                                         margin: 'auto',
//                                         width: '100%'
//                                     }}
//                                     className='rounded-xl'

//                                 />
//                                 <img
//                                     src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//                                     style={{
//                                         display: 'block',
//                                         height: '100%',
//                                         margin: 'auto',
//                                         width: '100%'
//                                     }}
//                                     className='rounded-xl'

//                                 />
//                             </Carousel>
//                         </div>
//                         <div className="lg:flex-grow leading-relaxed rounded-3xl border border-gray-500  md:w-1/2  ml-3  shadow-sm	px-4 py-4 flex flex-col md:items-start md:text-left  ">
//                             <div className=' d-flex justify-content-around w-full px-0 ml-0  '>
//                                 <h2 className=" sm:text-3xl  text-xl mb-2 flex-grow-1 font-weight-bold text-yellow-400   ">Arcane</h2>
//                                 <h2 className="sm:text-3xl  text-3xl mb-2  ">8.3<span className='text-xs '>/10</span></h2>
//                             </div>
//                             <div className=' d-flex justify-content-around w-full  py-1'>

//                                 <p className='w-50 text-xs flex-grow-1 leading-relaxed text-gray-500'>Viale san Michele del carso 7 Milan 20144</p>

//                                 <span className=' text-xs text-indigo-500	  '>See on map</span>

//                             </div>
//                             <div className='w-full'>
//                                 <p className=" leading-relaxed text-sm w-full py-1 text-gray-500">Average price 38 accepts returns</p>
//                                 <p className=" leading-relaxed text-sm w-full text-red-500 py-1 px-1    font-weight-bold">-50% at checkout</p>

//                                 <div className="flex justify-center">
//                                     <button
//                                         className="inline-flex text-white bg-yellow-400 mt-4 font-weight-bold hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-lg">Book nup to 50%
//                                     </button>

//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             </section>
//             <div className='w-full flex justify-content-center'>
//                 <div className='w-full flex justify-content-center px-24 mb-8 mt-8'>
//                     <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('menu')}>Menu</button>
//                     <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('promotions')}>Promotions</button>
//                     <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('photos')}>User photos</button>
//                     <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('reviews')}>Reviews</button>
//                     <button className=' px-4 py-2 text-center rounded-pill  mr-2 border border-yellow-400 hover:text-white hover:font-weight-bold hover:bg-yellow-400' onClick={()=>scrollTo('info')}>Info</button>
//                 </div>
//             </div>

//             <div className='w-full flex justify-content-center'>
//                 <div className='py-2  place-content-start w-75 px-36 '>
//                     <p className='  text-left text-sm font-weight-bold mb-1 w-full text-black' id='menu'>Chef: <span className='text-gray-500'>Mario Rossi</span> </p>
//                     <p className='  text-left font-weight-bold w-full text-sm text-black mb-4'>Average price: <span className='text-gray-500'>38$</span> </p>
//                     <div className=' mr-0  w-full min-w-2/3  '>
//                         <div className='d-flex justify-content-around w-full mb-2'>
//                             <div className='flex-grow-1 py-2 '>
//                                 <h6 className='text-left font-weight-bold text-sm text-black'>Pizza margherita pomodoro mozzarella vongole</h6>
//                                 <p className='text-xs text-left'>Pomodoro mozzarella</p>
//                             </div>
//                             <div>
//                                 <span className='text-lg py-2  font-weight-bold text-black text-right'>15$</span>
//                             </div>
//                         </div>
//                         <div className='d-flex justify-content-around w-full mt-2'>
//                             <div className='flex-grow-1'>
//                                 <h6 className='text-left font-weight-bold text-sm text-black'>Pizza margherita</h6>
//                                 <p className='text-xs text-left'>Pomodoro mozzarella</p>
//                             </div>
//                             <div>
//                                 <span className='text-lg py-2  font-weight-bold text-black text-right'>15$</span>
//                             </div>
//                         </div>
//                         <div className='d-flex justify-content-around w-full mt-2'>
//                             <div className='flex-grow-1'>
//                                 <h6 className='text-left font-weight-bold text-sm text-black'>Pizza margherita</h6>
//                                 <p className='text-xs text-left'>Pomodoro mozzarella</p>
//                             </div>
//                             <div>
//                                 <span className='text-lg py-2  font-weight-bold text-black text-right'>15$</span>
//                             </div>
//                         </div>
//                         <div className=' text-left w-full mt-2'>

//                             <h6 className='text-left font-weight-bold text-sm text-black'>Food Options</h6>
//                             <p className='text-xs text-left w-full'>vegan</p>

//                             <div className='flex justify-content-end'>
//                                 <button
//                                     className="  inline-flex text-white bg-yellow-400 font-weight-bold hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-lg">See full menu
//                                 </button>
//                             </div>

//                         </div>
//                     </div>
//                     <div className=' mr-0  w-full min-w-2/3  mt-8'>
//                         <h1 className='font-old text-left text-xl mb-8' id='promotions'>Our promotions</h1>
//                         <div className='w-full '>
//                             <Carousel
//                                 additionalTransfrom={0}
//                                 arrows
//                                 autoPlaySpeed={3000}
//                                 centerMode={false}
//                                 className=""
//                                 containerClass="carousel-container"
//                                 dotListClass=""
//                                 draggable
//                                 focusOnSelect={false}
//                                 infinite
//                                 itemClass="carousel-item-padding-30-px"
//                                 keyBoardControl
//                                 minimumTouchDrag={80}
//                                 renderButtonGroupOutside={false}
//                                 renderDotsOutside={false}
//                                 responsive={{
//                                     desktop: {
//                                         breakpoint: {
//                                             max: 3000,
//                                             min: 1024
//                                         },
//                                         items: 2,
//                                         partialVisibilityGutter: 40
//                                     },
//                                     mobile: {
//                                         breakpoint: {
//                                             max: 464,
//                                             min: 0
//                                         },
//                                         items: 1,
//                                         partialVisibilityGutter: 30
//                                     },
//                                     tablet: {
//                                         breakpoint: {
//                                             max: 1024,
//                                             min: 464
//                                         },
//                                         items: 2,
//                                         partialVisibilityGutter: 30
//                                     }
//                                 }}
//                                 showDots={false}
//                                 sliderClass=""
//                                 slidesToSlide={1}
//                                 swipeable
//                             >

//                                 <Card/>
//                                 <Card/>
//                                 <Card/>

//                             </Carousel>
//                         </div>
//                     </div>

//                 </div>
//             </div> */}

//       //       //table res
//       // <h1 className="font-old text-3xl mt-8" id={"photos"}>
//       //   {" "}
//       //   User photos
//       // </h1>
//       // <p className="text-sm text-gray-500 mt-8 px-44 mb-8">
//       //   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
//       //   eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
//       //   bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
//       //   tincidunt laoreet ex, in pretium orci vestibulum eget.
//       // </p>
//       // <UserPhotos />
//       // <div className="w-full flex justify-content-center">
//       //   <section
//       //     id="info"
//       //     className="text-gray-700 body-font w-75 px-44 mt-8 mb-8"
//       //   >
//       //     <div className="container  py-4 mx-auto w-full">
//       //       <div className="flex flex-col text-left w-full mb-4">
//       //         <h1
//       //           className="sm:text-3xl text-2xl font-medium font-old text-center  title-font mb-4 text-gray-900"
//       //           id="info"
//       //         >
//       //           Other informations
//       //         </h1>
//       //         <div className="w-full p-3 ">
//       //           <div className="mb-3">
//       //             <h6 className="text-gold font-weight-bold text-xs">Info</h6>
//       //             <p className="text-gray-500 text-xs font-weight-bold">
//       //               info about the restaurant
//       //             </p>
//       //           </div>
//       //           <div className="mb-3">
//       //             <h6 className="text-gold font-weight-bold text-xs">Info</h6>
//       //             <p className="text-gray-500 text-xs font-weight-bold">
//       //               info about the restaurant
//       //             </p>
//       //           </div>
//       //           <div className="mb-3">
//       //             <h6 className="text-gold font-weight-bold text-xs">Info</h6>
//       //             <p className="text-gray-500 text-xs font-weight-bold">
//       //               info about the restaurant
//       //             </p>
//       //           </div>
//       //           <div className="mb-3">
//       //             <h6 className="text-gold font-weight-bold text-xs">Info</h6>
//       //             <p className="text-gray-500 text-xs font-weight-bold">
//       //               info about the restaurant
//       //             </p>
//       //           </div>
//       //         </div>
//       //       </div>
//       //     </div>
//       //   </section>
//       // </div>

//       // <div id="reviews">
//       //   <About />
//       // </div>
