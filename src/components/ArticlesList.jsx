import { useState, useEffect } from "react"
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";


function ArticlesList(props) {

  const [searchParams, setSearchParams] = useSearchParams()
  const topic = searchParams.get("topic")

  const { currentArticles, setCurrentArticles, sortBy, setSortBy, isLoading, setIsLoading} = props;

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic).then((articles) => {
      setCurrentArticles(articles);
      setIsLoading(false)
    });
  }, [topic, setIsLoading, setCurrentArticles]);


  if (isLoading) {
    return <Loading></Loading>;
  } else {
  return (
    <>
    {topic ? <h2>{topic} articles</h2> : <h2>Articles</h2>}
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