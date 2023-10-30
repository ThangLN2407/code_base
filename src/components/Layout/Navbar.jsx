import React from 'react'
import styles from './styles.module.scss'
import BaseButton from 'components/Base/Button'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <BaseButton label="logout"></BaseButton>
    </div>
  )
}

export default Navbar
