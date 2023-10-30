import React, { forwardRef, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// layout
const TemplatePage = lazy(() => import('../../components/Layout/Template'))
const Background = lazy(() => import('../../components/Layout/Background'))

// user page
const ErrorPage = lazy(() => import('../../pages/403'))
const DashboardPage = lazy(() => import('../../pages/Dashboard'))
const TopPage = lazy(() => import('../../pages/Top'))
const FormPage = lazy(() => import('../../pages/Form'))

// auth page
const LoginPage = lazy(() => import('../../pages/Authentication/Login'))

const authRoutes = [
  {
    path: 'login',
    component: <LoginPage />,
  },
]

const routes = [
  {
    path: '/',
    component: <DashboardPage />,
  },
  {
    path: 'top',
    component: <TopPage />,
  },
  {
    path: 'form',
    component: <FormPage />,
  },
]
const Main = forwardRef((props, ref) => {
  return (
    <>
      <Routes ref={ref} {...props}>
        <Route element={<Background />}>
          {authRoutes.map((elm, index) => {
            return (
              <Route
                key={index}
                path={elm.path}
                element={elm.component}
              ></Route>
            )
          })}
        </Route>
        <Route element={<TemplatePage />}>
          {routes.map((elm, index) => {
            return (
              <Route
                key={index}
                path={elm.path}
                element={elm.component}
              ></Route>
            )
          })}
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  )
})

Main.displayName = 'Main'

export default Main
