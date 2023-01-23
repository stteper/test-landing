import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { MainPage } from './layout'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
