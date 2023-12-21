import { useContext, useEffect, useMemo, useState } from "react"
import { DataContext } from "../../context/DataContext"
import { useParams } from "react-router-dom";

const FullData = () => {
  const { data } = useContext(DataContext);
  const searchItem = useParams();
  const currentItem = data.find(element => element.id === parseInt(searchItem.id));

  const [categories, setCategories] = useState([]);

  return (
    <>
      <section className="information-container full-page">
        <section className="current-tier">
          <section className="visual-container">
            <div className="thumbnail backgroundSizeCover" style={{ backgroundImage: `url(${currentItem.image})` }}></div>
            {currentItem.video &&
              <div className="product-view-video-container ">
                <video src={currentItem.video} muted autoPlay className="video"></video>
              </div>
            }
          </section>
          <div className="product-information">
            <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "1rem" }}>
              <h1 style={{ fontSize: "1.2rem", textAlign: "justify" }}>{currentItem.name}</h1>
            </div>
            <CategoriesContainer
              currentItem={currentItem}
              categories={categories}
              setCategories={setCategories}
            />
            <button className="follow-button">
              Follow
            </button>
          </div>
        </section>
      </section>
    </>
  )
}

const CategoriesContainer = ({ currentItem, categories, setCategories }) => {
  const displayPrice = useMemo(() => {
    const cateName = currentItem.tierSelector.length > 1 ? categories.join(",") : categories[0];
    const number = currentItem?.models?.find(model => model.name === cateName)?.price / 100000;
    return number ? `₫${number.toLocaleString('de-DE')}` : currentItem.price;
  }, [categories, currentItem]);

  return (
    <div className="tierSelector">
      <div className="oneInfo">
        <h3>Default price: </h3>
        <h1>{displayPrice}</h1>
      </div>
      {currentItem?.tierSelector?.map((tier, tierIndex) => (
        <Categories
          tier={tier}
          key={tierIndex}
          tierIndex={tierIndex}
          categories={categories}
          setCategories={setCategories}
        />
      ))}
    </div>
  )
}

const Categories = ({ tier, categories, tierIndex, setCategories }) => {
  const [addCategory, setAddCategory] = useState("");

  useEffect(() => {
    const newArray = categories;
    newArray[tierIndex] = addCategory;
    setCategories([...newArray]);
  }, [addCategory]);

  const handleClick = (option) => {
    if (option === addCategory) return setAddCategory("");
    setAddCategory(option);
  }

  return (
    <div className="categories" >
      <h3>{tier.name}:</h3>
      <div className="categories-container">
        <ul className="categories-list">
          {tier.options.map((option, index) => (
            <li
              key={index}
              role="button"
              className="an-item"
              style={{ display: tier?.images?.length ? "grid" : "", backgroundColor: addCategory === option ? "rgb(182, 182, 182)" : "" }}
              onClick={() => handleClick(option)}
            >
              {tier?.images?.length && <img src={`https://down-vn.img.susercontent.com/file/${tier.images[index]}`} alt="" />}
              <h5>{option}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FullData