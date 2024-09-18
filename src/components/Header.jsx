import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <nav className="navigation-bar">
        <h2 id="nc-title">NC News</h2>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </>
  );
}

export default Header;
