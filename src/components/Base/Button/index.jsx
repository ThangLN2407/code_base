import { Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'

const BaseButton = ({
  label,
  color,
  variant,
  children,
  disabled,
  onClick,
  className,
  ...props
}) => {
  return (
    <Button
      variant={variant ? variant : 'contained'}
      disabled={disabled}
      onClick={onClick}
      className={`${className ? className : ''}
      ${disabled ? '' : styles.base_button}
      text-capital`}
      {...props}
    >
      {label}
      {children}
    </Button>
  )
}

export default BaseButton
