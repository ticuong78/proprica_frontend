import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { DataContext } from "../../context/DataContext";

const Inputfield = ({ setIsClicked }) => {
  const [conflict, setConflict] = useState(false);
  const { items, setItems, searchURL, setSearchURL } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchURL(e.target.value);
    setConflict(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchURL === "") {
      setIsClicked(false);
      return navigate("/production/view", { state: { from: location } });
    }
    const exist = items.find(element => element.searchURL === searchURL);
    if (exist?.fetching || exist?.data?.name) return setConflict(true);
    setItems([...items, {
      id: items[items?.length - 1]?.id + 1 || 1,
      searchURL,
      fetching: true
    }]);
  }

  return (
    <section className="real-input-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="searching-field">searching for Items and URL</label>
        <input type="text" onChange={handleChange} value={searchURL} className="real-input" placeholder="Type in URL or product name" autoFocus autoComplete="none" />
      </form>
      <p className="existed" style={{ opacity: conflict ? 1 : 0 }}>Item has already existed</p>
    </section>
  )
}

export default Inputfield