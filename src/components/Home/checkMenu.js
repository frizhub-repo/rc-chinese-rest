import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./MainStyles";
import Menu from "../../images/menu.png";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export default function CheckMenu() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Card
        className={`${classes.root5} ${classes.screenStyles} ${classes.bookButtonClss}`}
        onClickHandler={() => history.push("/menu")}
      >
        <CardContent className={classes.flexOne}>
          <img className={classes.bookImage} src={Menu} />
          <Typography className={classes.newTextStyles}>
            CHECK ALSO OUR MENU!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
