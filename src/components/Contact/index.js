import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import { useForm } from "react-hook-form";
import { addContactUs } from "../../api/customers";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import Typography from "@material-ui/core/Typography";
import map from "../../images/map.jpg";
import { useStyles } from "../Home/MainStyles";
function Contact() {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const addContactUsHandler = async (data) => {
    try {
      setLoading(true);
      const res = await addContactUs(data);
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
      <div className={classes.tableReserve2}>
        <div>
          <TimingsCard
            id="3"
            open="true"
            textForOpen="Keep in touch with us"
            styles={`${classes.root5} ${classes.extraStyle7}`}
            textStyles={classes.textStyles}
          />
        </div>
        <Card className={`${classes.root5} ${classes.extraStyle8}`}>
          <CardContent>
            <form
              className={classes.mapDivStyles}
              onSubmit={handleSubmit(addContactUsHandler)}
            >
              <div className={classes.upperDiv}>
                <div className={classes.innerDiv}>
                  <div className={classes.flexStyles}>
                    <Card
                      className={`${classes.innnerCard} ${classes.nameStyles}`}
                    >
                      <CardContent>
                        {" "}
                        <Typography className={classes.typostyles2}>
                          NAME
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      className={`${classes.innnerCard} ${classes.nameDivStyles}`}
                    >
                      <input
                        className="ip"
                        ref={register}
                        name="name"
                        placeholder="John Doe"
                      />
                      {/* <CardContent>
                        <Card
                          className={`${classes.innnerCard} ${classes.nameDivStyles} ${classes.nameDiv2Styles}`}
                        >
                          <CardContent>
                            <Typography className={classes.typostyles3}>
                              Dawood Javeed
                            </Typography>
                            <input />
                          </CardContent>
                        </Card>
                        
                      </CardContent> */}
                    </Card>
                  </div>
                  <div className={classes.flexStyles}>
                    <Card
                      className={`${classes.innnerCard} ${classes.emailStyles}`}
                    >
                      <CardContent>
                        <Typography className={classes.typostyles2}>
                          EMAIL
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      className={`${classes.innnerCard} ${classes.emailDivStyles} `}
                    >
                      <input
                        className="ip"
                        ref={register}
                        name="email"
                        placeholder="johndoe@gmail.com"
                      />

                      {/* <CardContent>
                        <Card
                          className={`${classes.innnerCard} ${classes.emailDivStyles} ${classes.emailDiv2Styles}`}
                        >
                          <CardContent>
                            <Typography className={classes.typostyles3}>
                              developmentliesinhearts@gmail.com
                            </Typography>
                          </CardContent>
                        </Card>
                      </CardContent> */}
                    </Card>
                  </div>
                </div>
                <div className={classes.flexStyles}>
                  <Card
                    className={`${classes.innnerCard} ${classes.messageStyles}`}
                  >
                    <CardContent>
                      <Typography className={classes.typostyles2}>
                        MESSAGE
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    className={`${classes.innnerCard} ${classes.messageDivStyles}`}
                  >
                    <input
                      className="ip"
                      ref={register}
                      name="message"
                      placeholder="Hi! This is a message"
                    />

                    {/* <CardContent>
                      <Card
                        className={`${classes.innnerCard} ${classes.messageDivStyles} ${classes.messageDiv2Styles}`}
                      >
                        <CardContent>
                          <Typography className={classes.typostyles3}>
                            text
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardContent> */}
                  </Card>
                </div>
                <button className={`${classes.buttonCard}`} type="submit">
                  {loading && (
                    <CircularProgress
                      color="inherit"
                      size={20}
                      style={{ marginRight: "8px" }}
                    />
                  )}
                  <b>
                    <Typography className={classes.typostyles2}>
                      SUBMIT
                    </Typography>
                  </b>
                </button>
              </div>
              <div className={classes.addressStyles}>
                <CardMedia className={classes.media3} image={map} />

                <Card className={`${classes.addressCard}`}>
                  <CardContent>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Address:</span> Vis
                      ciccio gialli Milan Italy
                    </Typography>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Email:</span>{" "}
                      starters@cafe.com
                    </Typography>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Phone:</span>{" "}
                      33344455566
                    </Typography>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Email:</span>{" "}
                      starters@cafe.com
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
