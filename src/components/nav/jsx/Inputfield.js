import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { DataContext } from "../../context/DataContext";

const Inputfield = ({ setIsClicked }) => {
  const [conflict, setConflict] = useState(false);
  const [message, setMessage] = useState('');
  const { items, setItems, searchURL, setSearchURL } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchURL(e.target.value);
    setMessage('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchURL === "") {
      setIsClicked(false);
      return navigate("/production/view", { state: { from: location } });
    }
    const deadLock = items.find(element => element.fetching);
    if(deadLock?.fetching) return setMessage("Sorry, requesting multiple products is not available");
    const exist = items.find(element => element.searchURL === searchURL);
    if (exist?.fetching || exist?.data?.name) 
      return setMessage("Sorry, product has already been existed");
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
      <section className="attention-container" style={{ opacity: message !== '' ? 1 : 0 }}>
        <div className="edge-container">
          <div className="edge">
          </div>
        </div>
        <p className="attention" >{message}</p>
      </section>
    </section>
  )
}

export default Inputfield