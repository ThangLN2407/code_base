import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import SuspenseLoading from './Main/SuspenseLoading'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <SuspenseLoading>
          <Routes>
            <Route path="/*" element={<Main></Main>}></Route>
          </Routes>
        </SuspenseLoading>
      </BrowserRouter>
    </>
  )
}
