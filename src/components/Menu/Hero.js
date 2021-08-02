import React, { useState, useEffect } from "react";
import HeroCard from "../Home/HeroCard";
import Section4 from "../Home/Section4.js";
import { productsByCategory } from "../../api/public";
import { useDispatch, useSelector } from "react-redux";
//import { GET_PRODUCTS_BY_CATEGORY } from "../../utils/types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import { useStyles } from "../Home/MainStyles";
import exicon from "../../images/exicon.png";
import shop from "../../images/shop.png";
import CardMedia from "@material-ui/core/CardMedia";
import foodPackage from "../../images/foodPackage.png";
import Carousel from "react-multi-carousel";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { getDeliverableMenus } from "../../api/customers";
import ProductByCategories from "../CustomComponents/ProductByCategories";
import DeleteItemIcon from "../../Assets/IconComponent/DeleteItemIcon";
import { removeItem } from "../../actions/index";
import delivery from "../../images/delivery.png";

function HeroDelivery() {
  let { restaurant, customerData } = useRestaurantContext();

  const GET_PRODUCTS_BY_CATEGORY = "PRODUCTS BY CATEGORY";

  const classes = useStyles();
  var scrollTo = function (ele) {
    let offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);

  const fetchProductsByCategory = async () => {
    try {
      setLoading(true);
      const res = await productsByCategory();
      dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: res?.data });
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  const history = useHistory();

  const { products: ordersProducts, total } = useSelector(
    (state) => state.orders
  );

  const orderNow = () => {
    if (ordersProducts?.length <= 0) {
      toast.error("Please provide some products to proceed");
      return;
    }
    if (customerData?.addresses?.length) {
      history.push("/chooseAddress");
    } else {
      history.push("/deliveryAddress");
    }
  };

  const removeItemFromCart = (product) => {
    dispatch(removeItem(product));
  };

  const isProductAddedToCart = (productId) => {
    let val = false;
    ordersProducts.forEach((prd) => {
      if (prd.product === productId) val = true;
    });
    return val;
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, []);

  const [menus, setMenus] = React.useState([]);

  const fetchDeliverableMenus = async () => {
    try {
      const res = await getDeliverableMenus();
      setMenus(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDeliverableMenus();
  }, []);

  return (
    <div>
      <div
        className=" flex items-center  h-96 justify-content-center"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80) center center",
        }}
      >
        <HeroCard />
      </div>
      <Section4 />
      <div className={classes.orderStyles2}>
        <div className={classes.itemsStyles} style={{ position: "relative" }}>
          <div className={`${classes.dealsRoot}`}>
            <div className="custom-scroll" style={{ height: "300px" }}>
              {menus.length ? (
                menus?.map((menu, index) => (
                  <p
                    key={menu?._id}
                    className={`${classes.dealsList} ${
                      activeIndex === index && classes.activeMenu
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setSectionIndex(0);
                    }}
                  >
                    {menu?.title}
                  </p>
                ))
              ) : (
                <div className={classes.notFoundMenus}>
                  These sections don't have any menus!
                </div>
              )}
            </div>
          </div>
          <TimingsCard
            id="3"
            open="true"
            textForOpen="DELIVERY COURSE"
            styles={`${classes.nRoot5} ${classes.extraStyle4} ${classes.extraStylesForRadius2} ${classes.extraStylesForD}`}
            textStyles={classes.textStyles}
          />

          <Card
            className={`${classes.nRoot5} ${classes.extraStyle3} ${classes.extraStyle11}`}
          >
            <CardContent className={classes.carouselCard}>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className={classes.crsStyles}
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 5,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={3}
                swipeable
              >
                {menus[activeIndex]?.items?.length > 0 &&
                  menus[activeIndex]?.items?.map((item, index) => (
                    <h1
                      key={index}
                      className={`${classes.carousel} ${
                        sectionIndex === index && classes.activeSection
                      }`}
                      onClick={() => setSectionIndex(index)}
                    >
                      {item?.category?.name}
                    </h1>
                  ))}
              </Carousel>
            </CardContent>
            {menus[activeIndex]?.items[sectionIndex]?.products?.length ? (
              <CardContent
                className={`${classes.cardSpacing} custom-scroll-product`}
              >
                <div className={classes.dCStyles}>
                  <ProductByCategories
                    products={menus[activeIndex]?.items[sectionIndex]?.products}
                    isProductAddedToCart={isProductAddedToCart}
                  />
                </div>
              </CardContent>
            ) : (
              <div
                style={{
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: "20px",
                }}
              >
                These sections don't have any products!
              </div>
            )}
          </Card>
        </div>

        <div className={classes.tableReserve}>
          <div className={classes.container4}>
            <Card className={classes.dCStyles1}>
              <CardContent>
                <div className={classes.img5}>
                  <img src={delivery} />
                </div>
              </CardContent>
            </Card>
            <div>
              <div>
                <TimingsCard
                  id="2"
                  startTime="9:00am"
                  endTime="2:00pm"
                  open="true"
                  styles={classes.dCStyles2}
                />
              </div>
              <div>
                <TimingsCard
                  id="3"
                  open="true"
                  textForOpen="Click for Delivery Hours"
                  styles={classes.dCStyles3}
                />
              </div>
            </div>
          </div>
          <Card className={`${classes.nRoot5} ${classes.extraStyle2}`}>
            <CardContent>
              <Card className={classes.infoCard}>
                <CardContent>
                  <div className={classes.infoCardText}>
                    <img src={exicon} className={classes.infoImageStyles} />
                    <p>
                      If you’ve got any allergies or intollerances (for you or
                      any one of your friends)
                    </p>
                    <p className={classes.clickStyles}>CLICK HERE</p>
                  </div>
                </CardContent>
              </Card>
              <Card className={classes.pickCard}>
                <CardContent className={classes.flexRowStyles}>
                  <Card className={classes.pickCard2}>
                    <CardContent className={classes.flexRowStyles}>
                      <CardMedia
                        className={classes.media0}
                        image={foodPackage}
                      />
                      <div className={`${classes.t2}`}>
                        <h1 className={classes.headingStyles2}>
                          Delivery at Home
                        </h1>
                        <p>You are missing 15$ for FREE SHIPPING</p>
                      </div>
                    </CardContent>
                  </Card>
                  <CardMedia className={classes.media7} image={shop} />
                  <div className={classes.textsStyles}>
                    <h1 className={classes.headingStyles}>PickUp your Order</h1>
                    <p>Come to our local to get your order</p>
                  </div>
                </CardContent>
              </Card>
              <br />

              <br />

              {ordersProducts?.length > 0 &&
                ordersProducts.map((product) => (
                  <div className={classes.sepText}>
                    <div className={classes.orderItem}>
                      <div onClick={() => removeItemFromCart(product)}>
                        <DeleteItemIcon />
                      </div>
                      <p className={classes.ml}>
                        {product.quantity}x {product?.name}
                      </p>
                    </div>
                    <p>{product.price} €</p>
                  </div>
                ))}
              <br />
              <hr />
              <br />
              <div className={classes.sepText}>
                <p>Subtotal</p>
                <p>{total} €</p>
              </div>

              <Card className={`${classes.buttonCardStyles}`}>
                <CardContent className={classes.borderSt}>
                  Add more 5€ to your order to proceed
                </CardContent>
              </Card>
              <Card
                className={`${classes.buttonCardStyles} ${classes.colorSt}`}
              >
                <CardContent className={classes.borderSt} onClick={orderNow}>
                  Choose a Payment method
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HeroDelivery;
