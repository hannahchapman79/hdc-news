import * as React from 'react';
import { useState, useEffect } from "react"
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "./SortBy";
import ErrorComponent from "./Error"
import { ResultsPerPage } from "./ResultsPerPage";
import { ResultsPagination } from './Pagination';

function ArticlesList() {

  const [currentArticles, setCurrentArticles] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [order, setOrder] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()
  const topic = searchParams.get("topic")
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultsPerPage, setResultsPerPage] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const params = {};
    if (topic) params.topic = topic;
    if (sortBy) params.sort_by = sortBy;
    if (order) params.order = order;
    if (resultsPerPage) params.limit = resultsPerPage;
    if (page) params.p = page;
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
  }, [topic, sortBy, order, page, setIsLoading, setCurrentArticles, searchParams])

  useEffect(() => {
    setError(null);
  }, [searchParams]);

  useEffect(() => {
    const newParams = {};
    if (topic) newParams.topic = topic;
    if (sortBy) newParams.sort_by = sortBy;
    if (order) newParams.order = order;
    if (resultsPerPage) newParams.limit = resultsPerPage;
    if (page) newParams.p = page;
    setSearchParams(newParams);
  }, [topic, sortBy, order, resultsPerPage, page, setSearchParams])

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <Loading></Loading>;
  } else {
    return (
      <>
        {topic ? <h2>{topic} articles</h2> : null}
        <div className="article-list-form-container">
          <SortBy sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}></SortBy>
          <ResultsPerPage setResultsPerPage={setResultsPerPage}></ResultsPerPage>
        </div>
        <section className="article-list">
          {currentArticles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}></ArticleCard>
          })}
          <ResultsPagination setPage={setPage}></ResultsPagination>
        </section>
      </>
    );
  }
}

export default ArticlesList;