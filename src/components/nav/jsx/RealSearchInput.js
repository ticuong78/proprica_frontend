import { useState } from "react";
import Inputfield from "./Inputfield";
import ItemsSearchedField from "./ItemsSearchedField";

const RealSearchInput = ({ setIsClicked }) => {
  const [conflict, setConflict] = useState(false);

  return (
    <>
      <section className="real-input-field">
        <div className="membrane" onClick={() => setIsClicked(false)}></div>
        <div className="cover">
          <Inputfield conflict={conflict} setConflict={setConflict} />
          <ItemsSearchedField />
        </div>
      </section>
    </>
  )
}

export default RealSearchInput