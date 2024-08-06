import { useState, useEffect } from "react"
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

function ArticlesList(props) {

  const { currentArticles, setCurrentArticles, sortBy, setSortBy, isLoading, setIsLoading } = props;

  useEffect(() => {
    setIsLoading(true)
    getArticles().then((articles) => {
      setCurrentArticles(articles);
      setIsLoading(false)
    });
  }, []);


  if (isLoading) {
    return <Loading></Loading>;
  } else {
  return (
    <>
      <h2>Articles</h2>
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