import { Route, Routes } from "react-router";
import ProductHome from "./ProductHome";
import Filter from "./Filter";
import '../css/content.css';

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductHome />} />
      <Route path="/view" element={<Filter />} />
    </Routes>
  )
}

export default Content