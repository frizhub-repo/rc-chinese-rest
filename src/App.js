import logo from "./logo.svg";
import "./App.css";
import "rsuite/dist/styles/rsuite-default.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import TableReservation from "./components/TableReservation";
import Delivery from "./components/delivery";
import Auth from "./components/Auth";
import DeliveryAddress from "./components/DeliveryAddress";
import DeliveryTime from "./components/DeliveryTime";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/tableRes" exact component={TableReservation} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/deliveryAddress" component={DeliveryAddress} />
          <Route path="/deliveryTime" component={DeliveryTime} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
