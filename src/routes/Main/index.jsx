import React, { forwardRef, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import SuspenseLoading from './SuspenseLoading'
const TemplatePage = lazy(() => import('../../components/Layout/Template'))
const ErrorPage = lazy(() => import('../../pages/403'))
const DashboardPage = lazy(() => import('../../pages/Dashboard'))
const TopPage = lazy(() => import('../../pages/Top'))
const FormPage = lazy(() => import('../../pages/Form'))
// const UserPage = lazy(() => import('../../pages/Management/User'))
// const DevicePage = lazy(() => import('../../pages/Management/Device'))
// const GroupPage = lazy(() => import('../../pages/Management/Group'))
// const ContactPage = lazy(() => import('../../pages/Contact'))
// const Setting01Page = lazy(() => import('../../pages/Setting/SettingUser'))
// const Setting02Page = lazy(() => import('../../pages/Setting/SettingGroup'))
// const Setting03Page = lazy(() => import('../../pages/Setting/SettingDevice'))

const authRoutes = []
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
        <Route element={<TemplatePage />}>
          {routes.map((elm, index) => {
            return (
              <Route
                key={index}
                path={elm.path}
                element={<SuspenseLoading>{elm.component}</SuspenseLoading>}
              ></Route>
            )
          })}
          {/* <Route
            path="/"
            element={
              <SuspenseLoading>
                <DashboardPage />
              </SuspenseLoading>
            }></Route>
          <Route
            path="top"
            element={
              <SuspenseLoading>
                <TopPage />
              </SuspenseLoading>
            }></Route> */}
        </Route>
        <Route
          path="/*"
          element={
            <SuspenseLoading>
              <ErrorPage />
            </SuspenseLoading>
          }
        />
      </Routes>
    </>
  )
})

Main.displayName = 'Main'

export default Main
