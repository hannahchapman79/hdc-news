import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-flqs.onrender.com/api",
});

const getArticles = () => {
    return api.get("/articles").then(({data}) => {
      return data.articles
    })
  }

  const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({ data }) => {
      return data.article;
    });
  };

  const getCommentsByArticleId = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({data}) => {
      return data.comments
    })
  }

  const incrementVotes = (article_id, value) => {
    return api.patch(`/articles/${article_id}`, { inc_votes: value })
  }

  export { getArticles, getArticleById, getCommentsByArticleId, incrementVotes };