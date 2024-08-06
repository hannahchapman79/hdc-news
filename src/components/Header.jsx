import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
      <h1>NC News</h1>
    </>
  );
}

export default Header;
