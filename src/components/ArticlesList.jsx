import { useState, useEffect } from "react"
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "./SortBy";
import ErrorComponent from "./Error"


function ArticlesList() {

  const [currentArticles, setCurrentArticles] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [order, setOrder] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()
  const topic = searchParams.get("topic")
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    const params = {};
    if (topic) params.topic = topic;
    if (sortBy) params.sort_by = sortBy;
    if (order) params.order = order;
    getArticles(params)
    .then((articles) => {
      setCurrentArticles(articles);
      setIsLoading(false);
    })
    .catch((err) => {
      const errorResponse = {
        status: err.response.status || 500,
        message: err.response.data.message || "Something went wrong!",
      };
      setError(errorResponse);
      setIsLoading(false);
    })
  }, [topic, sortBy, order, setIsLoading, setCurrentArticles, searchParams])

  useEffect(() => {
    setError(null);
  }, [searchParams]);

  useEffect(() => {
    const newParams = {};
    if (topic) newParams.topic = topic;
    if (sortBy) newParams.sort_by = sortBy;
    if (order) newParams.order = order;
    setSearchParams(newParams);
  }, [topic, sortBy, order, setSearchParams])

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <Loading></Loading>;
  } else {
  return (
    <>
    {topic ? <h2>{topic} articles</h2> : null}
    <SortBy sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}></SortBy>
      <section className="article-list">
        {currentArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article}></ArticleCard>
        })}
      </section>
    </>
  );
      }
}

export default ArticlesList;