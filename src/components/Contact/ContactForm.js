import { CircularProgress } from "@material-ui/core";
import { addContactUs } from "api/customers";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import classes from "./contactForm.module.css";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
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
      <form onSubmit={handleSubmit(addContactUsHandler)}>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-6 d-flex flex-column pb-4">
            <label className={classes.label}>Name</label>
            <input
              ref={register}
              name="name"
              className={classes.input}
              type="text"
            />
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column pb-4">
            <label className={classes.label}>Email</label>
            <input
              ref={register}
              name="email"
              className={classes.input}
              type="text"
            />
          </div>
        </div>
        <div className="d-flex flex-column pb-4">
          <label className={classes.label}>Message</label>
          <input
            ref={register}
            name="message"
            className={classes.input}
            type="text"
          />
        </div>
        <div>
          <button className={classes.button} type="submit">
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
