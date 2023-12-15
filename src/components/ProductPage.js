import Nav from "./nav/jsx/Nav";
import { Route, Routes } from "react-router";
import ProductHome from "./content/jsx/ProductHome";
import Filter from "./content/jsx/Filter";
import './content/css/content.css'

const ProductPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <ProductHome />
          </>
        } />
        <Route path="/view" element={<Filter />} />
      </Routes>
    </>
  )
}

export default ProductPage