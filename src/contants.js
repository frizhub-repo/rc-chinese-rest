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
