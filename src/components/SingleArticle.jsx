import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function SingleArticle () {

const [article, setArticle] = useState({});
const { article_id } = useParams();

const [isLoading, setIsLoading] = useState(false);


useEffect(() => {
  setIsLoading(true)
  getArticleById(article_id).then((article) => {
    setArticle(article);
    setIsLoading(false)
  });
}, [article_id]);

if (isLoading) {
  return <Loading></Loading>;
} else {
  return (
    <>
      <section className="single-article">
        <h1>{article.title}</h1>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <img src={article.article_img_url} />
        <p>Author: {article.author}</p>
        <Link to={`/articles/${article.article_id}/comments`}>
        <button className="view-comments">View all comments</button>
        </Link>
        </section>
    </>
  );
}
}

export default SingleArticle;