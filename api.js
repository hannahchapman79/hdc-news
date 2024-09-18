import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-flqs.onrender.com/api",
});

const getArticles = (params = {}) => {
    return api.get('/articles', { params }).then(({data}) => {
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

  const postComment = (article_id, newComment) => {
    return api.post(`/articles/${article_id}/comments`, newComment)
  }

  const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`).then(({data}) => {
      return data;
    })
  }

  const getTopics = () => {
    return api.get("/topics").then(({data}) => {
      return data.topics
    })
  }


  export { getArticles, getArticleById, getCommentsByArticleId, incrementVotes, postComment, deleteComment, getTopics };