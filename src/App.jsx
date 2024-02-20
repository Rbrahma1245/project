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
import { Auth0Provider } from "@auth0/auth0-react";
import authConfig from "./Components/Forms/auth0-config";
import Testing from "./Components/Forms/Testing";
import Profile from "./Components/Forms/Profile";

function App() {
  return (
    <APIContext>
      <Auth0Provider
        domain={authConfig.domain}
        clientId={authConfig.clientId}
        redirectUri={authConfig.redirectUri}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact Component={Homepage} />
            <Route path="/about" Component={About} />
            <Route path="/product" Component={Product} />
            <Route path="/product/:productId" Component={SingleProduct} />
            <Route path="/:category" element={<Categories />} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />

            <Route path="/test" element={<Testing />} />

            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Auth0Provider>
    </APIContext>
  );
}

export default App;
