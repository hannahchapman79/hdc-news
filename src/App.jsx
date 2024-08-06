import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import ArticleProvider from './components/ArticleProvider'
import SingleArticle from './components/SingleArticle.jsx'

function App() {

const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Homepage/>}>
      </Route>
      <Route path="/articles" element={<ArticleProvider setIsLoading={setIsLoading} isLoading={isLoading}/>}>
      </Route>
      <Route path="/articles/:article_id" element={<SingleArticle setIsLoading={setIsLoading} isLoading={isLoading}/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App
