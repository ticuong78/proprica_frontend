import { Link } from "react-router-dom"

const IntroductionBody = () => {
  return (
    <>
      <div className="child-body">
        <div className="titles">
          <h1>Proprica</h1>
          <h5 className="not-start-here">We are here to help you find the lowest price</h5>
          {/* <div className="sign-in-button-container">
            <div className="authenticate-buttons-child-container">
              <button className="authenticate">
                <Link style={{ textDecoration: "none", color: "rgb(25, 25, 25)" }}>
                  Sign in
                </Link>
              </button>
              <button className="authenticate">
                <Link style={{ textDecoration: "none", color: "rgb(25, 25, 25)" }}>
                  Sign up
                </Link>
              </button>
            </div>
          </div> */}
          <div className="arrow">
            <span>
            </span>
            <span>
            </span>
            <span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroductionBody