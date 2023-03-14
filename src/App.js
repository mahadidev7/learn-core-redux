import { useState } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import store from "./redux/store";
import "./styles/output.css";

function App() {
  const [router, setRouter] = useState("home");

  const routerHandler = (e) => {
    setRouter(e);
  };
  return (
    <Provider store={store}>
      {/* Nabbar  */}
      <Navbar routerHandler={routerHandler} />
      {router === 'home' ? <Home /> : <Cart />}
    </Provider>
  );
}

export default App;
