import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>    {/*in such way we can use store in every child component*/}
    <App />
  </Provider>
);
