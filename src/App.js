import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home/Home";
import { Provider } from "react-redux";
import store from "./Component/Store/store";
import Cart from "./Component/Cart/Cart";
import { Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
