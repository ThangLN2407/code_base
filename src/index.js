import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoute from './routes'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './i18n'
import { store } from './stores'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MainRoute />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
)
