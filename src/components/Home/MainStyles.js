import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
  sectionStyles: {
    marginBottom: "20px",
  },
  divStyles: {
    height: "100%",
  },
  skeletonStyles: {
    marginBottom: "20px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  banner: {
    border: "1px solid #8080804f",
    padding: "20px",
    borderRadius: "10px",
    opacity: "0.8",
  },
  bannerHeading: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  menuHeading: {
    fontWeight: "700",
    marginRight: "5px",
    fontSize: "17px",
  },
  cardContentSPacing: {
    padding: "13px",
  },
  menuContent: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    fontWeight: "700",
    fontSize: "17px",
    textAlign: "start",
    margin: "20px 0px ",
  },
  menuPara: {
    fontWeight: "600",
    color: "grey",
    fontSize: "17px",
  },
  cardContent: {
    border: "1px solid text-lg",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
  },
  mobile1: {
    padding: "6rem 13rem 6rem 13rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      flexDirection: "column",
    },
  },
  mobile2: {
    width: "66.66%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  container: {
    marginLeft: "20px",
  },
  hrStyles: {
    color: "black",
  },
  root5: {
    backgroundColor: "white",
    width: "410px",
    height: "80px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    textAlign: "center",
  },
  nRoot5: {
    backgroundColor: "#EA9C0D",
    width: "400px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  bookButtonClss: {
    backgroundImage:
      "linear-gradient(left, #280813, #280813 20%, transparent 20%, transparent 100%)",
    borderRadius: "15px",
  },
  bookButtonClss2: {
    backgroundColor: "#280813",
    backgroundImage:
      "linear-gradient(left, white, white 20%, transparent 20%, transparent 100%)",
    borderRadius: "15px",
    border: "1px solid black",
  },
  textStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "x-large",
    marginTop: "10px",
    color: "white",
  },
  ntextStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "x-large",
    marginTop: "10px",
    color: "white",
  },
  newTextStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "x-large",
    marginTop: "10px",
    color: "black",
  },
  nTS2: {
    color: "white",
    fontSize: "24px",
  },
  containerTwo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      position: "relative",
      marginLeft: "45px",
    },
  },
  iconClass: {
    width: "80px",
    height: "70px",
    border: "4px solid #EA9C0D",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right: "23px",
      width: "63px",
      height: "68px",
    },
  },
  divClass: {
    display: "flex",
    justifyContent: "space-around",
  },
  extraStyle: {
    backgroundColor: "#10B981",
    borderRadius: "0px",
    height: "75px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
  },
  extraStyle2: {
    backgroundColor: "#F49E0B",
    borderRadius: "0px",
    height: "fit-content",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  coursesStyles: {
    display: "flex",
    flexDirection: "column",
  },
  tableReserve: {
    marginTop: "15px",
    width: "400px",
  },
  container4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
    width: "400px",
  },
  extra: {
    marginLeft: "-30px",
  },
  root2: {
    backgroundColor: "#EA9C0D",
    width: "80px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },

  root4: {
    backgroundColor: "#EA9C0D",
    width: "250px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  root6: {
    backgroundColor: "#280813",
    width: "250px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  extraStyle3: {
    backgroundColor: "white",
    borderRadius: "0px",
    height: "1150px",
    width: "900px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  firstone: {
    backgroundColor: "#280813",
  },
  firsttwo: {
    backgroundColor: "white",
    color: "#F49E0B",
  },
  rStyles: {
    [theme.breakpoints.down("md")]: {
      width: "573px",
      position: "relative",
      left: "13px",
    },
  },
  extraStyle4: {
    backgroundColor: "#10B981",
    borderRadius: "0px",
    width: "300px",
    height: "60px",
    marginTop: "30px",
  },
  extraStylesForRadius: {
    borderTopRightRadius: "15px",
    backgroundColor: "#280813",

    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
  },
  extraStyleForRadius3: {
    backgroundColor: "#280813",

    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
  },
  extraStylesForRadius2: {
    borderTopLeftRadius: "15px",
    backgroundColor: "#280813",
    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
  },
  headerStyles: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "15px",
    },
  },
  screenStyles: {
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right: "22px",
    },
  },
  courseCardDiv: {
    borderTopLeftRadius: "15px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "-15px",
    },
  },
  img: {
    width: "38px",
    height: "38px",
  },
  img5: {
    width: "63px",
    height: "38px",
  },
  imageDiv: {
    backgroundColor: "#EA9C0D",
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#280813",
    fontSize: 20,
    marginTop: "15px",
    fontFamily: "Roboto",
  },
  pStyles: {
    fontStyle: "italic",
    color: "white",
  },

  title: {
    fontSize: 17,
    color: "#EBA73A",
    fontStyle: "italic",
    marginTop: "30px",
  },
  title2: {
    marginTop: "5px",
  },
  pos: {
    marginBottom: 12,
  },
  img2: {
    height: "189px",
    width: "127px",
    display: "block",
  },
  avatarStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h1Styles: {
    color: "#EA9C0D",
    fontSize: "27px",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bolder",
    marginTop: "15px",
  },

  imgStyles: {
    height: "54px",
    width: "60px",
    marginRight: "20px",
    marginTop: "-10px",
    marginLeft: "20px",
  },
  divNewStyles: {
    marginBottom: "-30px",
  },
  imgDivContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  root7: {
    width: "280px",
    height: "234px",
    borderRadius: "50%",
    backgroundColor: "#EA9C0D",
    borderLeft: "30px solid #280813",
    borderRight: "30px solid #280813",
    [theme.breakpoints.down("sm")]: {
      width: "318px",
      height: "445px",
    },
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: "20px",
    marginTop: "20px",
  },
  cardContentStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "10px",
    color: "white",
    textAlign: "center",
    lineHeight: "18px",
  },
  lineStyles: {
    width: "520px",
    height: "3px",
    backgroundColor: "white",
    marginBottom: "20px",
  },
  extraStyle7: {
    backgroundColor: "#280813",
    borderRadius: "0px",
    height: "70px",
    width: "1250px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "357px",
      position: "relative",
      left: "82",
    },
  },
  extraStyle8: {
    backgroundColor: "white",

    borderRadius: "0px",
    width: "1250px",
    height: "740px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "357px",
      position: "relative",
      left: "82",
    },
  },

  tableReserve2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "30px",
    marginBottom: "60px",
  },
  imageStyles: {
    width: "1170px",
    height: "250px",
    objectFit: "cover",
  },

  carosalStyles: {
    display: "flex",
    justifyContent: "center",
  },
  innerCarosalStyles: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "7px",
    left: "60px",
  },
  bookImgStyles: {
    backgroundColor: "white",
    height: "72px",
    width: "85px",
    marginTop: "-25px",
    marginLeft: "-14px",
    borderTopLeftRadius: "15px",
  },
  bookImgStyles4: {
    backgroundColor: "white",
    height: "72px",
    width: "85px",
    marginTop: "-25px",
    marginLeft: "-14px",
    borderTopLeftRadius: "15px",
  },
  bookStyles: {
    height: "59px",
    width: "56px",
    marginTop: "-6px",
  },
  typoStyles: {
    color: "white",
    marginTop: "-55px",
    marginLeft: "30px",
    fontSize: "25px",
    fontWeight: "bolder",
  },
  orderStyles2: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: "40px",
    scrollbarWidth: "thin",
  },
  itemsStyles: {
    display: "flex",
    flexDirection: "column",
  },
  extraStylesForD: {
    width: "900px",
    backgroundColor: "#280813",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    [theme.breakpoints.down("md")]: {
      width: "588px",
    },
  },
  extraStyle11: {
    height: "100%",
    backgroundColor: "#f49e0b",
    [theme.breakpoints.down("md")]: {
      width: "588px",
      position: "relative",
    },
  },
  dCStyles1: {
    backgroundColor: "#280813",
    width: "150px",
    height: "120px",
    color: "black",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  dCStyles2: {
    backgroundColor: "#280813",
    width: "300px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  dCStyles3: {
    backgroundColor: "white",
    width: "300px",
    height: "60px",
    color: "#F49E0B",
    borderRadius: "0px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  dCStyles6: {
    width: "1000px",
    height: "800px",
    position: "relative",
    overflow: "hidden",
    overflowY: "scroll",
    scrollbarWidth: "auto",
    left: "40px",

    color: "black",
  },

  infoCard: {
    backgroundColor: "white",
    height: "87px",

    color: "white",
    borderRadius: "15px",
    border: "2px solid #CB0E0E",
  },
  getStars: {
    color: "#280813",
    fontSize: "40px",
  },
  getStarsSlash: {
    color: "#EA9C0D",
    fontSize: "50px",
  },
  infoCardText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bolder",
    fontSize: "10px",
    flexDirection: "column",
    marginTop: "-10px",
  },
  infoImageStyles: {
    width: "30px",
    height: "30px",
  },
  clickStyles: {
    color: "#CB0E0E",
    textDecoration: "underline",
    fontWeight: "bold",
    position: "relative",
    bottom: "7px",
    fontSize: "12px",
  },
  pickCard: {
    backgroundColor: "#280813",
    width: "372px",
    height: "65px",
    color: "white",
    borderRadius: "15px",
    marginTop: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  pickCard2: {
    backgroundColor: "white",
    width: "196px",
    height: "63px",
    color: "white",
    borderRadius: "15px",
    display: "flex",
    marginLeft: "-12px",
    marginTop: "-14px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  shopImage: {},
  innnerCard: {
    backgroundColor: "#EA9C0D",
    width: "200px",
    height: "70px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    textAlign: "center",
    fontWeight: "bolder",
    marginLeft: "20px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  upperDiv: {
    display: "grid",
    gridRowGap: "2px",
  },
  innerDiv: {
    display: "flex",
  },
  nameStyles: {
    width: "280px",
    [theme.breakpoints.down("md")]: {
      width: "230px",
    },
  },
  emailStyles: {
    width: "360px",
    [theme.breakpoints.down("md")]: {
      width: "260px",
    },
  },
  messageStyles: {
    width: "670px",
    marginTop: "-70px",
    [theme.breakpoints.down("md")]: {
      width: "514px",
    },
  },
  nameDivStyles: {
    width: "280px",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    marginTop: "10px",
    backgroundColor: "white",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      width: "230px",
    },
  },
  emailDivStyles: {
    width: "360px",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    marginTop: "10px",
    backgroundColor: "white",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      width: "260px",
    },
  },
  messageDivStyles: {
    width: "670px",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    marginTop: "10px",
    backgroundColor: "white",
    height: "140px",
    [theme.breakpoints.down("md")]: {
      width: "514px",
    },
  },
  nameDiv2Styles: {
    backgroundColor: "#E8E8E8",
    width: "288px",
    height: "86px",
    marginTop: "-10px",
    marginLeft: "-10px",
  },
  emailDiv2Styles: {
    backgroundColor: "#E8E8E8",
    width: "368px",
    height: "87px",
    marginLeft: "-10px",
    marginTop: "-11px",
  },
  messageDiv2Styles: {
    backgroundColor: "#E8E8E8",
    width: "680px",
    height: "124px",
    marginTop: "-9px",
    marginLeft: "-5px",
  },
  flexStyles: {
    display: "flex",
    flexDirection: "column",
  },
  buttonCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#280813",
    width: "670px",
    height: "70px",
    marginLeft: "18px",
    color: "white",
    borderRadius: "15px",
    marginTop: "-90px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "514px",
    },
  },
  typostyles2: {
    textAlign: "center",
    color: "white",
    fontSize: "30px",
  },
  typostyles3: {
    textAlign: "center",
    color: "black",
    fontSize: "20px",
  },
  mapDivStyles: {
    display: "flex",
  },
  mapCard: {
    backgroundColor: "white",
    width: "522px",
    height: "437px",
    marginLeft: "20px",
    color: "white",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  addressStyles: {
    display: "flex",
    flexDirection: "column",
  },
  addressCard: {
    backgroundColor: "white",
    width: "510px",
    height: "237px",
    marginLeft: "20px",
    color: "white",
    borderRadius: "15px",
    marginTop: "20px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "396px",
    },
  },
  avatarDivStyles: {
    display: "flex",
    justifyContent: "space-between",
  },

  forflex: {
    display: "flex",
    flexDirection: "column",
    marginRight: "-160px",
    marginLeft: "30px",
    marginTop: "25px",
  },
  carouselLeftCard: {
    height: "368px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset 4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "30px",
  },
  carouselRightCard: {
    height: "368px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset -4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "30px",
  },
  resSmallCards: {
    backgroundColor: "#FCE2B6",
    height: "50px",
    width: "110px",
    borderRadius: "5px",
  },
  likeIcon: {
    height: "30px",
  },
  euroIcon: {
    marginTop: "-15",
    marginLeft: "20px",
    height: "70px",
    width: "70px",
  },
  fourFiveIcon: {
    height: "20px",
    marginTop: "5px",
  },
  numberIcon: {
    height: "15px",
    marginTop: "5px",
  },
  likeIconDiv: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    justifyContent: "space-evenly",
  },
  iconsDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  typostyles7: {
    textAlign: "center",
    color: "#10B981",
    fontSize: "20px",
  },
  pStyles2: {
    color: "#F59E0B",
  },
  media: {
    width: "1160px",
    height: "250px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "20px",
    marginLeft: "50px",
    [theme.breakpoints.down("md")]: {
      width: "888px",
    },
  },
  media2: {
    width: "370px",
    height: "370px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "20px",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      width: "293px",
      height: "300px",
    },
  },
  media3: {
    width: "522px",
    height: "430px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "20px",
    [theme.breakpoints.down("md")]: {
      width: "396px",
    },
  },
  media3Home: {
    width: "1000px",
    height: "305px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "100px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      width: "396px",
    },
  },
  media4: {
    width: "330px",
    height: "120px",
    borderRadius: "15px",
    marginTop: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "20px",
  },
  textDivStyles: {
    display: "flex",
    flexDirection: "column",
    marginRight: "400px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "200px",
    },
  },
  media7: {
    width: "65px",
    height: "56px",
    marginTop: "-10px",
    marginLeft: "7px",
  },
  media0: {
    width: "78px",
    height: "56px",
    marginTop: "-13px",
    marginLeft: "-5px",
  },
  flexRowStyles: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  t2: {
    color: "#EA9C0D",
    fontSize: "8px",
    fontStyle: "italic",
    marginTop: "-12px",
    marginLeft: "5px",
  },
  textsStyles: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontSize: "11px",
    fontStyle: "italic",
    marginTop: "-6px",
    marginLeft: "5px",
  },
  nheadingStyles: {
    color: "#F49E0B",
    fontSize: "35px",
  },

  headingStyles2: {
    textDecoration: "underline",
    fontSize: "12px",
    fontWeight: "bold",
  },
  sepText: {
    display: "flex",
    justifyContent: "space-between",
    color: "grey",
    fontWeight: "bolder",
    fontFamily: "Roboto",
  },
  buttonCardStyles: {
    backgroundColor: "#D57070",
    width: "366px",
    height: "38px",
    color: "white",
    borderRadius: "10px",
    marginTop: "15px",
    textAlign: "center",
  },
  colorSt: {
    backgroundColor: "#646464",
  },
  borderSt: {
    marginTop: "-9px",
  },

  additionInfoImgContainer: {
    left: "0",
    height: "45px",
    boxShadow: "rgba(73, 38, 38, 0.5) 0px 1px 4px",
    borderTop: "2px solid #c2bbba",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    scrollbarWidth: "thin",
  },
  textFont: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "20px",
  },
  textFont2: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "65px",
  },
  mImgStyles: {
    width: "30px",
    height: "30px",
    position: "relative",
    top: "-10px",
    cursor: "pointer",
  },

  additionInfoImgContaine2r: {
    left: "0",
    height: "45px",
    boxShadow: "rgba(73, 38, 38, 0.5) 0px 1px 4px",
    borderTop: "2px solid #c2bbba",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    scrollbarWidth: "thin",
  },
  textFont222: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "20px",
  },
  textFont22: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "65px",
  },
  mImgStyles2: {
    width: "30px",
    height: "30px",
    position: "relative",
    top: "-10px",
  },

  mCardStyles: {
    width: "55px",
    height: "42px",
    borderRadius: "0px 0px 23px 23px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  forwardArrow: {
    backgroundColor: "#F69D0B",
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    borderRadius: "50%",
    width: 80,
    height: 80,
    left: 15,
    cursor: "pointer",
    color: "white",
  },
  backwordArrow: {
    backgroundColor: "#F69D0B",
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 80,
    height: 80,
    borderRadius: "50%",
    right: 15,
    cursor: "pointer",
    color: "white",
  },
  carousel: {
    color: "#280813",
    padding: "10px",
    height: "100%",
    border: "1px solid #EA9C0D",
    backgroundColor: "#fff",
    borderRadius: "30px",
    cursor: "pointer",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
  },

  activeSection: {
    color: "#fff",
    backgroundColor: "#280813",
  },

  paraStyles: {
    color: "#EA9C0D",
    fontSize: "15px",
    lineHeight: "23px",
    webkitLineClamp: 10,
  },
  roundedImage: {
    width: "400px",
    height: "400px",
  },
  roundedCircle: {
    borderRadius: "50%",
    height: "360px",
    width: "360px",
  },
  extraStyleForC7: {
    backgroundColor: "#280813",
    borderRadius: "0px",
    height: "60px",
    width: "1010px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "357px",
      position: "relative",
      left: "82",
    },
  },
  extraStyleForC8: {
    backgroundColor: "white",

    borderRadius: "0px",
    width: "1010px",
    height: "460px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "357px",
      position: "relative",
      left: "82",
    },
  },
  extraStyleForC9: {
    backgroundColor: "#280813",
    borderRadius: "0px",
    height: "60px",
    width: "900px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "357px",
      position: "relative",
      left: "82",
    },
  },
  extraStyleForC10: {
    backgroundColor: "white",

    borderRadius: "0px",
    width: "900px",
    height: "460px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "357px",
      position: "relative",
      left: "82",
    },
  },
  circleButton: {
    width: "120px",
    height: "120px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  stStyles: {
    backgroundColor: "#280813",
    backgroundImage:
      "linear-gradient(left, #f49e0b, #f49e0b 20%, transparent 20%, transparent 100%)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  flexOne: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titltedText: {},
  bookImage: {
    width: "40px",
    height: "40px",
  },
  container2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
  },
  container2d: {
    display: "grid",
    gridTemplateColumns: "207px 207px",
    gridRowGap: "1px",
    gridColumnGap: "1px",
  },
  textStyles2: {
    color: "white",
  },
  root22: {
    backgroundColor: "#62BA81",
    width: "110px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root3: {
    background: "linear-gradient(90deg, #6d6b67 40%, #EA9C0D 30%)",
    width: "750px",
    height: "400px",
    marginTop: "5px",
    marginBottom: "40px",
    borderRadius: "15px",

    color: "white",
  },
  root42: {
    backgroundColor: "#62BA81",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root52: {
    backgroundColor: "#EA9C0D",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  img2d: {
    width: "60px",
    height: "60px",
    marginTop: "13px",
    marginLeft: "10px",
  },
  aboutUsText: {
    color: "#F59E0B",
    fontFamily: "Roboto",
    fontStyle: "normal",
    textAlign: "center",
  },
  headingStyle2: {
    fontSize: "72px",
    lineHeight: "84px",
  },
  paraStyles2: {
    fontSize: "30px",
    lineHeight: "35px",
    marginLeft: "27px",
  },
  root62: {
    backgroundColor: "#EA9C0D",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderBottom: "1px solid grey",
  },
  closedStyles: {
    backgroundColor: "#CB0E0E",

    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderBottom: "1px solid grey",
  },
  timingCardStyles: {
    backgroundColor: "#EA9C0D",
    width: "210px",
    height: "50px",
    color: "white",
    borderRadius: "0px",
  },
  addStyles: {
    backgroundColor: "#BA2211",
  },
  addStyles2: {
    borderBottomLeftRadius: "15px",
  },
  addStyles3: {
    borderBottomRightRadius: "15px",
  },
  typoStyles4: {
    textAlign: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
  },
  timingCardStyles2: {
    backgroundColor: "#62BA81",
    width: "418px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  timingCardContect: {},
  timingCardContect2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img22: {
    width: "80px",
    height: "80px",
    marginTop: "-5px",
  },
  //section 3 styles start here
  s3MainDiv: { marginTop: "30px" },
  s3InnerDiv: { display: "flex", flexDirection: "column", width: "550px" },
  s3FirstCard: {
    backgroundColor: "white",
    width: "434px",
    height: "80px",
    borderRadius: "0px 0px 15px 15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  s3FirstCardImage: { height: "280px", width: "401px" },
  carouselDiv: {
    display: "flex",
    width: "575px",
    position: "relative",
  },
  carouselLeftCard2: {
    height: "338px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset 4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "3px",
  },
  carouselRightCard2: {
    height: "338px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset -4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "3px",
  },
  carouselInnerCard: {
    backgroundColor: "#10B981",
    height: "338px",
    width: "460px",
    borderRadius: "30px",
    position: "absolute",
    left: "58px",
    top: "3px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  carouselCardImageDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  carouselCardImage: { height: "130px", width: "130px" },
  whiteBar: {
    width: "550px",
    height: "5px",
    backgroundColor: "white",
    marginTop: "10px",
    borderRadius: "5px",
  },
  text: { color: "white" },
  mainDiv: {
    margin: "30px 0px 30px",
  },
  divFlexStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divFlexStyles2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  roundedCardStyles: {
    backgroundColor: "#EA9C0D",
    width: "60px",
    height: "60px",
    color: "white",
    borderRadius: "50%",
    marginLeft: "800px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  flexDisplay: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  media32: {
    width: "622px",
    height: "370px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "70px",
    marginRight: "-50px",
  },
  media5: {
    width: "437px",
    height: "300px",
    borderRadius: "15px 15px 0px 0px",
  },
  flexRowStyle: {
    display: "flex",
    justifyContent: "space-around",
  },
  flexColStyle: {
    display: "flex",
    flexDirection: "column",
  },
  pTextStyles: {
    marginTop: "8px",
    fontWeight: "bolder",
  },
  forwardArrow2: {
    backgroundColor: "#F69D0B",
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    borderRadius: "50%",
    width: 80,
    height: 80,
    left: 15,
    cursor: "pointer",
    color: "white",
  },
  backwordArrow2: {
    backgroundColor: "#F69D0B",
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 80,
    height: 80,
    borderRadius: "50%",
    right: 15,
    cursor: "pointer",
    color: "white",
  },
  flexDStyles: {
    display: "flex",
    justifyContent: "center",
  },
  indicatorStyles: {
    background: "#F69D0B",
    width: 30,
    height: 30,
    display: "inline-block",
    margin: "0 8px",
    borderRadius: "50%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  },
  indiExtra: {
    background: "white",
    width: 30,
    height: 30,
    display: "inline-block",
    margin: "0 8px",
    borderRadius: "50%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    border: "2px solid #9b6408",
  },

  flexCoursel: {
    width: "1086px",
    height: "297px",
  },
  tabsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  tabs: {
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
  },
  activeText: {},
  ntext: {
    color: "rgba(219, 214, 213)",
  },

  whiteCircle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #F49E0B",
    backgroundColor: "white",
    backgroundSize: "cover",
    borderRadius: "50%",
    color: "#F49E0B",
    maxWidth: "15em",
    minHeight: "15em",
  },
  wImg: {},
}));
