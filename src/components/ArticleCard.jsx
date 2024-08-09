import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;

  const date = new Date(article.created_at)
  const readableDate = date.toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <section className="article-card">
        <Link to={`/articles?topic=${article.topic}`}>
          <h4 id="topic-link">{article.topic}</h4>
        </Link>
        <h3>{article.title}</h3>
        <h4>Author: {article.author}</h4>
        <p>Comments: {article.comment_count}</p>
        <p>{readableDate}</p>
        <p>Votes: {article.votes}</p>
        <Link to={`/articles/${article.article_id}`}>
          <button className="view-article">View article</button>
        </Link>
      </section>
    </>
  );
}

export default ArticleCard;