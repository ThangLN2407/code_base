import { Button } from 'antd'
import React from 'react'
import styles from './styles.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Button type="primary" className={styles.button_logout}>Logout</Button>
    </div>
  )
}

export default Navbar
