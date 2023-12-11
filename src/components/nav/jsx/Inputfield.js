import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Inputfield = ({ conflict, setConflict }) => {
  const { items, setItems, searchURL, setSearchURL } = useContext(DataContext);

  const handleChange = (e) => {
    setSearchURL(e.target.value);
    setConflict(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exist = items.find(element => element.searchURL === searchURL);
    if (exist && exist.name) return setConflict(true);
    setItems([...items, {
      id: items[items?.length - 1]?.id + 1 || 1,
      searchURL
    }]);
  }

  return (
    <section className="real-input-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="searching-field">searching for Items and URL</label>
        <input type="text" onChange={handleChange} value={searchURL} className="real-input" placeholder="Type in URL or product name" autoFocus autoComplete="none" />
      </form>
      <p className="existed" style={conflict ? { opacity: "1" } : { opacity: "0" }}>Item has already existed</p>
    </section>
  )
}

export default Inputfield