import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoute from './routes'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MainRoute></MainRoute>
    </LocalizationProvider>
  </React.StrictMode>,
)
