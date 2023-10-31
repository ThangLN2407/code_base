import React from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import BaseButton from '../Base/Button'

const Navbar = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <div className={styles.navbar}>
      <BaseButton label="logout" onClick={goToLogin}></BaseButton>
    </div>
  )
}

export default Navbar
