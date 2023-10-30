import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import '../Layout/global.scss'

const Background = () => {
  return (
    <div className={`${styles.background}`}>
      <Outlet></Outlet>
    </div>
  )
}

export default Background
