import Inputfield from "./Inputfield";
import ItemsSearchedField from "./ItemsSearchedField";

const RealSearchInput = ({ setIsClicked }) => {

  return (
    <>
      <section className="real-input-field">
        <div className="membrane" onClick={() => setIsClicked(false)}></div>
        <div className="cover">
          <Inputfield setIsClicked={setIsClicked} />
          <ItemsSearchedField />
        </div>
      </section>
    </>
  )
}

export default RealSearchInput