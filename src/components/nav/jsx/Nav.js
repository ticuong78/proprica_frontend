import Links from "./Links";
import SearchInput from './SearchInput';
import LoginSection from "./LoginSection";
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className="product-page-nav">
      <section className="navigation">
        <Links />
      </section>
      <SearchInput />
      <LoginSection />
    </nav>
  )
}

export default Nav