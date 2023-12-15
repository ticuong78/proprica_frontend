import { useState } from "react";
import video from "../storage/proprica-turtorial.mp4"

const ProductHome = () => {
  const [focus, setFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="product-home">
      <h1 className="how-do-we-work">How do we work ?</h1>
      <section className="turtorial">
        <article className="steps-container">
          <article className="steps">
            <h2>Steps: </h2>
            <br />
            <article className="small-step">
              <p className="bullet">1. </p>
              <p>Search for items you want to compare the price by URL or name</p>
            </article>
            <br />
            <article className="small-step">
              <p className="bullet">2. </p>
              <p>Confirm your items list</p>
            </article>
            <br />
            <article className="small-step">
              <p className="bullet">3. </p>
              <p>Check for categories of item which you want to get announce of</p>
            </article>
            <br />
            <article className="small-step">
              <p className="bullet">4. </p>
              <p>Wait for our announcement when the price drop to lowest or reach your specific point</p>
            </article>
            <br />
            <article className="small-step">
              <p className="bullet">5. </p>
              <p>Enjoy surfing! ^^</p>
            </article>
            <br />
            <form className="submit-email-form" style={{ boxShadow: focus ? "0 0 10rem steelblue" : "" }} onSubmit={handleSubmit}>
              <input type="text" placeholder="Leave us your email !" className="input-email" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
              <button className="submit-email-button">
                Contact
              </button>
            </form>
          </article>
        </article>
        <article className="turtorial-video">
          <article className="video-container">
            <p>Happy watching !</p>
            <div className="video-section">
              <video width="750px" className="video-player" controls muted autoPlay={true} loop>
                <source src={video} type="video/mp4" />
                <p>
                  Your browser does not support video format
                </p>
              </video>
            </div>
            <h3>Proprica turtorial video</h3>
          </article>
        </article>
      </section>
    </div>
  )
}

export default ProductHome