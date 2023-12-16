import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { lazy, Suspense, useContext } from "react";
import { DataContext } from "../../context/DataContext";

const RealSearchInput = lazy(() => import('./RealSearchInput'));

const SearchInput = () => {
  const {isClicked, setIsClicked} = useContext(DataContext);

  return (
    <>
      <section className="input-section">
        <div className="search-container" role="button" onClick={() => setIsClicked(true)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <label htmlFor="fake-search">search for items</label>
          <input type="text" className="fake-search" id="fake-search" placeholder="Type in URL or product name" />
        </div>
      </section>
      <Suspense>
        {isClicked && <RealSearchInput setIsClicked={setIsClicked} />}
      </Suspense>
    </>
  )
}

export default SearchInput