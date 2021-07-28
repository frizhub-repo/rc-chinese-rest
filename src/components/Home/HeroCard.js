import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Logo from "../../images/CLogo.png";

const useStyles = makeStyles({
  root: {
    width: "360px",
    height: "360px",
    borderRadius: "50%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    backgroundColor: "#280813",
  },
  centerClass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    height: "220px",
    width: "160px",
    position: "relative",
    top: "50px",
  },
});

export default function HeroCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.centerClass}>
        <img className={classes.img} src={Logo} />
      </CardContent>
    </Card>
  );
}
