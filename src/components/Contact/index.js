import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import { useForm } from "react-hook-form";
import { addContactUs } from "../../api/customers";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";

function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const addContactUsHandler = async (data) => {
    try {
      setLoading(true);
      await addContactUs(data);
      toast.success("Your query has been submitted successfully!");
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar selected={"Conatct"} />
      <div
        className="mt-0 flex pl-36 items-center  h-96 justify-content-start"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1509606674268-3c9117451da1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center center",
        }}
      >
        <div className="border-l-4 py-4 px-2 rounded border-yellow-400 ml-24">
          <h1 className="font-old text-white font-3xl text-left">Contact</h1>
        </div>
      </div>
      <section className="w-full px-36">
        <h1 className="font-old text-3xl mt-8"> Contact us</h1>
        <p className="text-sm text-gray-500 mt-8 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget.
        </p>
        <div className="mt-8 flex  rounded-lg">
          <div className="mx-4 border border-gray-600 shadow-lg p-8 rounded-lg w-1/2 ">
            <form onSubmit={handleSubmit(addContactUsHandler)}>
              <input
                name="name"
                required
                placeholder="Name"
                ref={register({
                  required: "Name is required",
                })}
                className="rounded-pill px-3 py-3 text-gray-600 text-sm border border-gray-600 w-full mb-4"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                ref={register({
                  required: "Email is required",
                })}
                className="rounded-pill px-3 py-3 text-gray-600 text-sm border border-gray-600 w-full mb-4"
              />
              <textarea
                name="message"
                ref={register({
                  required: "Message is required",
                })}
                placeholder="Message"
                className="text-gray-600 rounded-lg p-4 border border-gray-600 text-sm w-full h-52 "
              ></textarea>
              <button type="submit" onClick={addContactUsHandler}>
                sdc
              </button>
            </form>
          </div>
          <div className="w-1/2 ">
            <div className="h-1/2  mb-4 ">
              <iframe
                width="100%"
                height="100%"
                className=" w-full h-full object-cover rounded-xl mb-8 "
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ height: "100%", width: "100%" }}
              ></iframe>
              <div className="flex justify-content-start">
                <p className="text-gray-600 font-weight-bold mr-2 text-sm text-left">
                  Address:{" "}
                </p>
                <p className="text-left">Via mario monti 12</p>
              </div>
              <div className="flex justify-content-start">
                <p className="text-gray-600 font-weight-bold mr-2 text-sm text-left">
                  email:{" "}
                </p>
                <p className="text-left">mario.rossi@gmil.com</p>
              </div>
              <div className="flex justify-content-start">
                <p className="text-gray-600 font-weight-bold mr-2 text-sm text-left">
                  phone:{" "}
                </p>
                <p className="text-left">333444-555</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-content-center mt-8 mb-8">
        <button className="text-white text-lg bg-yellow-400 text-center rounded-pill px-2 py-3  w-1/6">
          {loading && (
            <CircularProgress
              color="inherit"
              size={20}
              style={{ marginRight: "8px" }}
            />
          )}
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
