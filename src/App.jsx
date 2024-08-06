import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import ArticleProvider from './components/ArticleProvider'

function App() {

  const [article, setCurrentArticle] = useState({});

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Homepage/>}>
      </Route>
      <Route path="/articles" element={<ArticleProvider/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App
