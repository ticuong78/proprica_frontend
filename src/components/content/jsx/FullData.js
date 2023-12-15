import useAxiosFetchFull from "../../../hooks/useAxiosFetchFull";
import { useMemo } from "react";

const FullData = ({ item }) => {
  const { data, setData } = useAxiosFetchFull();

  return (
    <li>FullData</li>
  )
}

export default FullData