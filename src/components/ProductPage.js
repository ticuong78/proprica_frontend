import Nav from "./nav/jsx/Nav";
import { Route, Routes } from "react-router";
import ProductHome from "./content/jsx/ProductHome";
import DisplayProducts from "./content/jsx/DisplayProducts";
import './content/css/content.css'

const ProductPage = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={
          <>
            <Nav />
            <ProductHome />
          </>
        } />
        <Route path="/view/*" element={<DisplayProducts />} />
      </Routes>
    </>
  )
}

export default ProductPage