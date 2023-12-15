import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import FullData from "./FullData";
import { lazy, Suspense } from "react";

const Filter = () => {
  const { items } = useContext(DataContext);

  return (
    <div className="product-view">
      <ul>
        {items.map(item =>
          (<FullData item={item} key={item.id}></FullData>)
        )}
      </ul>
    </div>
  )
}

export default Filter