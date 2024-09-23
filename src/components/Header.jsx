import { Link, useNavigate} from "react-router-dom";

function Header({ resetParams }) {

  const navigate = useNavigate();

  const handleArticlesClick = () => {
    resetParams(); 
    navigate("/articles");
  };


  return (
    <>
      <nav className="navigation-bar">
        <h2 id="nc-title">NC News</h2>
        <Link to="/">Home</Link>
        <Link to="/articles" onClick={handleArticlesClick}>Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </>
  );
}

export default Header;
