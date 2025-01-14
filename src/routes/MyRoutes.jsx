import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home.jsx";
import ProductsCategory from "../pages/ProductsCategory.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Search from "../pages/Search.jsx";
import Filter from "../pages/Filter.jsx";
import Login from "../pages/Login.jsx";
import Discounts from "../pages/Discounts.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import AuthRequired from "../helpers/AuthRequired.jsx";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/photoland" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:category" element={<ProductsCategory />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="search" element={<Search />} />
        <Route path="filter" element={<Filter />} />
        <Route path="login" element={<Login />} />
        <Route element={<AuthRequired />}>
          <Route path="discounts" element={<Discounts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
