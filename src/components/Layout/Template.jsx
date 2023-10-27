import React from 'react'
import styles from './styles.module.scss'
import { Outlet } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Sidebar from '../Layout/Sidebar'
import '../Layout/global.scss'

const Template = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='d-flex'>
        <Sidebar></Sidebar>
        <div className={styles.main_template}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default Template
