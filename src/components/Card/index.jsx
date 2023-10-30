import React from 'react'
import styles from './styles.module.scss'
import { CardContent } from '@mui/material'

const Card = ({ classes, children, ...props }) => {
  return (
    <div className={`${styles.card} ${classes ? classes : ''}`} {...props}>
      {children}
    </div>
  )
}

export default Card
