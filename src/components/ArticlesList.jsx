import { useState, useEffect } from "react"
import getArticles from "../../api";
import ArticleCard from "./ArticleCard";

function ArticlesList(props) {

const { currentArticles, setCurrentArticles, sortBy, setSortBy } = props;

useEffect(() => {
    getArticles().then((articles) => {
        console.log(articles);
        setCurrentArticles(articles);
    });
  }, []);

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

export default ArticlesList;