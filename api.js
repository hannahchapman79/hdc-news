import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-flqs.onrender.com/api",
});

const getArticles = () => {
    return api.get("/articles").then(({data}) => {
      return data.articles
    })
  }

  export default getArticles;