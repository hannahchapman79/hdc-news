import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function SingleArticle (props) {

const [article, setCurrentArticle] = useState({});
const { article_id } = useParams();

const {isLoading, setIsLoading } = props;


useEffect(() => {
  setIsLoading(true)
  getArticleById(article_id).then((article) => {
    setCurrentArticle(article);
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
        </section>
    </>
  );
}
}

export default SingleArticle;