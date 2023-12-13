import { createContext, useRef, useState } from "react";
import shopList from "../../config/shop";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [searchURL, setSearchURL] = useState('');
  const queueRef = useRef(1);

  return (
    <DataContext.Provider value={{
      items, setItems,
      searchURL, setSearchURL, shopList
    }}>
      {children}
    </DataContext.Provider>
  )
}