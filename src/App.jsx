import Homepage from "./Screens/Homepage/Homepage";
import "./App.css";
import Header from "./Components/Header/Header";
import APIContext from "./Context/APIContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Screens/About/About";
import Login from "./Components/Forms/Login/Login";
import Signup from "./Components/Forms/Signup/Signup";
import Product from "./Screens/Product/Product";
import SingleProduct from "./Screens/SingleProduct/SingleProduct";
import Categories from "./Screens/Categories/Categories";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <APIContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/about" Component={About} />
          <Route path="/product" Component={Product} />
          <Route path="/product/:productId" Component={SingleProduct} />
          <Route path="/:category" element={<Categories />} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </APIContext>
  );
}

export default App;
