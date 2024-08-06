import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import ArticleProvider from './components/ArticleProvider'
import SingleArticle from './components/SingleArticle.jsx'
import CommentsList from './components/CommentsList'

function App() {

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Homepage/>}>
      </Route>
      <Route path="/articles" element={<ArticleProvider/>}>
      </Route>
      <Route path="/articles/:article_id" element={<SingleArticle/>}>
      </Route>
      <Route path="/articles/:article_id/comments" element={<CommentsList/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App
