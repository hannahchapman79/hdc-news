import { useState } from "react"
import ArticlesList from "./ArticlesList"

const ArticleProvider = (props) => {
    const [currentArticles, setCurrentArticles] = useState([])
    const [sortBy, setSortBy] = useState("")
    const { isLoading, setIsLoading } = props;

    return (
        <>
            <ArticlesList currentArticles={currentArticles} setCurrentArticles={setCurrentArticles} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </>
    )
}

export default ArticleProvider;