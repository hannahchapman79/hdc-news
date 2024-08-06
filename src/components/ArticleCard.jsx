import { Link } from "react-router-dom";

function ArticleCard (props) {
    const { article } = props;

    return (
      <>
        <section className="article-card">
          <h3>{article.title}</h3>
          <h4>Topic: {article.topic}</h4>
          <h4>Author: {article.author}</h4>
          <Link to={`/articles/${article.article_id}`}>
            <button className="view-article">View article</button>
          </Link>
        </section>
      </>
    );
}

export default ArticleCard;