import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import ArticleProvider from './components/ArticleProvider'
import SingleArticle from './components/SingleArticle.jsx'
import CommentsList from './components/CommentsList'
import { TopicList } from './components/TopicList'
import ErrorComponent from './components/Error'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/articles" element={<ArticleProvider/>} />
      <Route path="/articles/:article_id" element={<SingleArticle/>} />
      <Route path="/articles/:article_id/comments" element={<CommentsList/>} />
      <Route path="/topics" element={<TopicList/>} />
      <Route path="*" element={<ErrorComponent/>} />
    </Routes>
    </>
  )
}

export default App
