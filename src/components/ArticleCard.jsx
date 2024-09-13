import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;

  const date = new Date(article.created_at)
  const readableDate = date.toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <section className="article-card">
        <img src={article.article_img_url} id="article-list-img"/>
        <div className="article-list-text"> 
        <Link to={`/articles?topic=${article.topic}`}>
          <h4 id="topic-link">{article.topic}</h4>
        </Link>
        <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
        </Link>
        <h4 id="article-author">{article.author}</h4>
        <p>Comments: {article.comment_count}</p>
        <p>{readableDate}</p>
        <p>Votes: {article.votes}</p>
        </div>
      </section>
    </>
  );
}

export default ArticleCard;