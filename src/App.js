import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
    <div className="grid place-items-center bg-blue-100 px-6 font-sans">
      <p className="pb-5">Create by <a href="https://mahadidev7-portfolio.web.app/" target="_blank" rel="noreferrer">Mahadidev7</a></p>
    </div>
    </Provider>
  );
}

export default App;
