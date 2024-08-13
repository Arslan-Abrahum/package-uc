import React from 'react'
import Home from './components/Home'
import SuccessfulUC from './components/SuccessfulUC'
import FailedUC from './components/FailUC'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/successfuluc' element={<SuccessfulUC />} />
          <Route path='/faileduc' element={<FailedUC />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
