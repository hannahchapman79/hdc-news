import { useState } from "react"
import ArticlesList from "./ArticlesList"

const ArticleProvider = () => {
    const [currentArticles, setCurrentArticles] = useState([])
    const [sortBy, setSortBy] = useState("")

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <ArticlesList currentArticles={currentArticles} setCurrentArticles={setCurrentArticles} isLoading={isLoading} setIsLoading={setIsLoading} />
        </>
    )
}

export default ArticleProvider;