import "./App.css";
import "rsuite/dist/styles/rsuite-default.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import TableReservation from "./components/TableReservation";
import Delivery from "./components/delivery";
import Auth from "./components/Auth";
import DeliveryAddress from "./components/DeliveryAddress";
import DeliveryTime from "./components/DeliveryTime";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import OrdersReceived from "./components/Orders/OrdersReceived";
import ExistingAddress from "./components/ExistingAddress";
import OrderSummary from "./components/Orders/OrderSummary";
import Footer from "components/Common/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/tableRes" exact component={TableReservation} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/deliveryAddress" component={DeliveryAddress} />
          <Route path="/deliveryTime" component={DeliveryTime} />
          <Route path="/auth" component={Auth} />
          <Route path="/payment" component={Payment} />
          <Route path="/profile" component={Profile} />
          <Route path="/ordersreceived/:id" component={OrdersReceived} />
          <Route path="/chooseAddress" exact component={ExistingAddress} />
          <Route path="/order/summary" exact component={OrderSummary} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
