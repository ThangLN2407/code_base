import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main></Main>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
