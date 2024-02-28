import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import ProductsCategory from "../pages/ProductsCategory/ProductsCategory";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Search from "../pages/Search/Search";

export default function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:category" element={<ProductsCategory />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
  );
}
