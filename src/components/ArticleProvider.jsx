import { useState } from "react"
import ArticlesList from "./ArticlesList"

const ArticleProvider = () => {
    const [currentArticles, setCurrentArticles] = useState([])
    const [sortBy, setSortBy] = useState("")

    return (
        <>
            <ArticlesList currentArticles={currentArticles} setCurrentArticles={setCurrentArticles}/>
        </>
    )
}

export default ArticleProvider;