import { useContext, useEffect, useRef } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { BeatLoader } from "react-spinners";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const isMounted = useRef(true);
  const { items, setItems, setSearchURL, shopList } = useContext(DataContext);
  const newArray = items.filter(element => element.id !== item.id);
  const itemFetch = useAxiosFetch();
  const controller = new AbortController();

  useEffect(() => {
    console.log(items);
    console.log(isMounted);
  }, [items, isMounted])

  const handldeDelete = () => {
    setItems(newArray);
    controller.abort();
  }

  useEffect(() => {
    const fecthItem = async () => {
      let newItem = { ...item }
      try {
        if (item.name || !item.fetching) return;
        const response = await itemFetch(item.searchURL, { signal: controller.signal });
        if (!response?.data) throw new Error(response?.errorMsg);
        const currentItem = response.data;
        const shop = shopList?.find(shop => item?.searchURL?.includes(Object.keys(shop)))
        const color = Object.values(shop)[0];
        const floor = Object.keys(shop)[0];
        newItem.data = { ...currentItem, color, floor };
        setSearchURL('');
      } catch (err) {
        newItem.error = err.message;
      } finally {
        newItem.fetching = false;
        setItems([...newArray, newItem]);
      }
    }

    isMounted.current && fecthItem();
    return () => isMounted.current = false;
  }, [])

  return (
    <>
      <li className="item" style={{ backgroundColor: item.error ? "#FF6666" : "transparent" }}>
        {item.fetching ?
          (<div className="load-container">
            <BeatLoader
              color="rgb(197, 211, 228)"
              loading={item.fetching}
              size={15}
              speedMultiplier={1}
            />
          </div>) : (
            <>
              {!item.error ? (
                <Link to={item.searchURL} target="_blank" style={{ textDecoration: "none", color: "unset" }}>
                  <section className="item-property">
                    <img src={item?.data?.image} alt="" className="item-image" />
                    <article>
                      <h4>
                        {item?.data?.name?.length > 200 ? `${item?.data?.name?.slice(0, 200)}...` : item?.data?.name}
                      </h4>
                      <span className="margin-top-5 shop-info">
                        <p className="shop-name">{item?.data?.shop}</p>
                        <p className="tag" style={{ backgroundColor: item?.data?.color }}>{item?.data?.floor}</p>
                      </span>
                      <p className="item-price margin-top-5">{item?.data?.price}</p>
                    </article>
                  </section>
                </Link>
              ) :
                <p className="err">{item.error}</p>
              }
              <button className="delete-button" onClick={handldeDelete} style={{ color: item.error ? "white" : "black" }}>
                <RiDeleteBack2Line />
              </button>
            </>
          )}
      </li >
    </>
  )
}

export default Item