import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CategoriesList from "./pages/CategoriesList";
import UsersList from "./pages/UsersList";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/wishlist" element={<WishList></WishList>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
