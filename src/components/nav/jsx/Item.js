import { useContext, useEffect, useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { BeatLoader } from "react-spinners";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { items, setItems, setSearchURL, shopList } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErr, setfetchErr] = useState(null);
  const itemFetch = useAxiosFetch();
  const controller = new AbortController();

  const handldeDelete = () => {
    const newArray = items.filter(element => element.id !== item.id);
    setItems(newArray);
    controller.abort();
  }

  useEffect(() => {
    const fecthItem = async () => {
      try {
        if (item.name) return;
        const response = await itemFetch(item.searchURL, { signal: controller.signal });
        if (response?.errorMsg) throw new Error(response?.errorMsg);
        const currentItem = response.data;
        const newArray = items.filter(element => element.id !== item.id);
        const shop = shopList?.find(shop => item?.searchURL?.includes(Object.keys(shop)))
        const color = Object.values(shop)[0];
        const floor = Object.keys(shop)[0];
        setItems([...newArray, { //học nextjs để thêm item vào database
          ...item,
          ...currentItem,
          color,
          floor
        }]);
        setSearchURL('');
      } catch (err) {
        setfetchErr(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fecthItem();
  }, [])

  return (
    <>
      <li className="item" style={fetchErr && { backgroundColor: "#FF6666" }}>
        {isLoading ?
          (<div className="load-container">
            <BeatLoader
              color="rgb(197, 211, 228)"
              loading={isLoading}
              size={15}
              speedMultiplier={1}
            />
          </div>) : (
            <>
              {!fetchErr ? (
                <Link to={item.searchURL} target="_blank" style={{ textDecoration: "none", color: "unset" }}>
                  <section className="item-property">
                    <img src={item.image} alt="" className="item-image" />
                    <article>
                      <h4>
                        {item?.name?.length > 200 ? `${item.name.slice(0, 200)}...` : item.name}
                      </h4>
                      <span className="margin-top-5 shop-info">
                        <p className="shop-name">{item.shop}</p>
                        <p className="tag" style={{ backgroundColor: item.color }}>{item.floor}</p>
                      </span>
                      <p className="item-price margin-top-5">{item.price}</p>
                    </article>
                  </section>
                </Link>
              ) :
                <p className="err">{fetchErr}</p>
              }
              <button className="delete-button" onClick={handldeDelete} style={fetchErr && { color: "white" }}>
                <RiDeleteBack2Line />
              </button>
            </>
          )}
      </li >
    </>
  )
}

export default Item