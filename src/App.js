import "./App.css";
import "rsuite/dist/styles/rsuite-default.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
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
import SignIn from "components/Auth/SignIn";
import SignUp from "components/Auth/SignUp";
import ForgotPassword from "components/Auth/ForgotPassword";
import Settings from "components/Settings";
import { useRestaurantContext } from "Context/restaurantContext";
import ResetPassword from "components/Auth/ResetPassword";
import NewPassword from "components/Auth/NewPassword";

function FooterWrapper({ location }) {
  if (
    location.pathname.match("/signIn") ||
    location.pathname.match("signUp") ||
    location.pathname.match("forgotPassword") ||
    location.pathname.match("profile") ||
    location.pathname.match("resetPassword.*") ||
    location.pathname.match("newPassword.*")
  )
    return null;
  return <Footer />;
}

function App() {
  const { token } = useRestaurantContext();

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
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/resetPassword/:id" exact component={ResetPassword} />
          <Route path="/newPassword/:id/:code" exact component={NewPassword} />

          {token ? (
            <>
              <Route path="/chooseAddress" exact component={ExistingAddress} />
              <Route path="/order/summary" exact component={OrderSummary} />
              <Route path="/payment" component={Payment} />
              <Route path="/profile" exact component={Settings} />
              <Route path="/deliveryAddress" component={DeliveryAddress} />
              <Route path="/deliveryTime" component={DeliveryTime} />
              <Route path="/ordersreceived/:id" component={OrdersReceived} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
        <WrappedFooter />
      </Router>
    </div>
  );
}

const WrappedFooter = withRouter(FooterWrapper);

export default App;
