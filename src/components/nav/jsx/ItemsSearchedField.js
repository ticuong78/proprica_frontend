import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import Item from "./Item";

const ItemsSearchedField = () => {
  const { items } = useContext(DataContext);

  return (
    <section className="searched-item-field">
      <ul style={{ marginTop: "10px" }}>
        {items.map((item) => <Item item={item} key={item.id} />
        )}
      </ul>
    </section>
  )
}

export default ItemsSearchedField