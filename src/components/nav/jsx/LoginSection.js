import { LuMailbox, LuBoxes } from "react-icons/lu";
import { FaChartBar } from "react-icons/fa";
import { RiVipCrown2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
    <section className="login-section">
      <Link className="authorize-button-container">
        <RiVipCrown2Line className="child" />
      </Link>
      <Link className="authorize-button-container">
        <FaChartBar className="child" />
      </Link>
      <Link className="authorize-button-container">
        <LuBoxes className="child" />
      </Link>
      <Link className="authorize-button-container">
        <LuMailbox className="child" />
      </Link>
      <Link className="authorize-button-container">
        <img src="https://th.bing.com/th/id/R.47d1cc4b137f211cb1c3dfa2135bacba?rik=ZyqfGjPxlsy%2fcQ&riu=http%3a%2f%2fgenslerzudansdentistry.com%2fwp-content%2fuploads%2f2015%2f11%2fanonymous-user.png&ehk=dJX%2fxGNqMoZrDjZmTuHpot4p8blz6HCbhb%2bTyBYlXDU%3d&risl=&pid=ImgRaw&r=0" alt="" className="user" />
      </Link>
    </section>
  )
}

export default LoginSection