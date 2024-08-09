import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import VoteHandler from "./VoteHandler";
import CommentList from "./CommentsList";
import ErrorComponent from "./Error"

function SingleArticle () {

const [article, setArticle] = useState({});
const { article_id } = useParams();

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true)
  getArticleById(article_id).then((article) => {
    setArticle(article);
    setIsLoading(false)
  })
  .catch((err) => {
    const errorResponse = {
      status: err.response.status || 500,
      message: err.response.data.message || "Something went wrong!",
    };
    setError(errorResponse);
    setIsLoading(false);
  })
}, [article_id]);

if (error) {
  return <ErrorComponent message={error.message} />;
}

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
        <VoteHandler article={article}/>
        <CommentList article={article}></CommentList>
        </section>
    </>
  );
}
}

export default SingleArticle;