import { useContext, useRef, useState } from "react"
import { DataContext } from "../../context/DataContext"
import { Link } from "react-router-dom";
import FullData from "./FullData";
import { Route, Routes } from "react-router";
import  {Squash as Hamburger} from 'hamburger-react'
import '../css/productView.css';

const DisplayProducts = () => {
  const { data } = useContext(DataContext);
  const [clickID, setClickID] = useState(1);

  return (
    <div className="product-view-body full-page">
      <section className="product-nav">
        <Hamburger/>
      </section>
      <div className="product-view full-page">
        <section className="product-view-container">
          <section className="product-view-list">
            <ul className="product-list full-page">
              {data.map(item =>
                <Bullet item={item} clickID={clickID} setClickID={setClickID} key={item.id} />
              )}
            </ul>
          </section>
          <section className="display-product">
            <Routes>
              <Route path="/:id/:itemName" element={<FullData />} />
            </Routes>
          </section>
        </section>
      </div>
    </div>
  )
}

const Bullet = ({ item, clickID, setClickID }) => {
  return (
    <Link to={`/production/view/${item.id}/${item.name}`} style={{ textDecoration: "none", color: "inherit" }}>
      <li className="product-view-bullet" style={{ background: clickID === item.id ? "paleturquoise" : "", color: clickID === item.id ? "black" : "" }} onClick={() => setClickID(item.id)}>
        <span className="product-bullet-view" >
          <div className="bullet-image backgroundSizeCover" style={{ backgroundImage: `url(${item.image})` }}></div>
          <section className="text-information">
            <h5>{item.name}</h5>
            <p>{item.price}</p>
          </section>
        </span>
      </li>
    </Link>
  )
}

export default DisplayProducts