import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-multi-carousel/lib/styles.css";
import "rsuite/lib/styles/index.less";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";

import { RestaurantProvider } from "./Context/restaurantContext";
import { Provider } from "react-redux";
import { OrderProvider } from "Context/OrderContext";
import FacebookChatPlugin from "components/ChatPlugin/FacebookChatPlugin";

ReactDOM.render(
  [
    <Provider store={store}>
      <RestaurantProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </RestaurantProvider>
    </Provider>,
    <ToastContainer />,
    <FacebookChatPlugin />,
  ],
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
