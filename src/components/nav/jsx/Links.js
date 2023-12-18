import { Link } from "react-router-dom";

const Links = () => {
  const lists = [
    {
      content:'Home',
      link: '/production'
    },
    {
      content:'Docs',
      link: '/docs'
    },
    {
      content:'About',
      link: '/about'
    }
  ];
  return (
    <>
      <span className="navigation-links" >
        <Link to="/" style={{ textDecoration: "none", color: "#f5f4f3" }}>
          <img src="../../../public/logo512.png" alt="" className="Proprica-Logo" />
        </Link>
      </span>
      {lists.map((list, index) => (
        <List key={index} list={list}/>
      ))}
    </>
  )
}

const List = ({list}) => {

  return (
    <>
      <span className="navigation-links" >
        <Link to={list.link} style={{ textDecoration: "none", color: "#f5f4f3" }}>
          {list.content}
        </Link>
      </span>
    </>
  )
}

export default Links