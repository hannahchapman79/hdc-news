import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;

  return (
    <>
      <section className="article-card">
        <h3>{article.title}</h3>
        <Link to={`/articles?topic=${article.topic}`}>
          <h4 id="topic-link">{article.topic}</h4>
        </Link>
        <h4>Author: {article.author}</h4>
        <Link to={`/articles/${article.article_id}`}>
          <button className="view-article">View article</button>
        </Link>
      </section>
    </>
  );
}

export default ArticleCard;