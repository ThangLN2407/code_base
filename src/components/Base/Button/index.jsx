import { Button } from '@mui/material'
import React from 'react'

const BaseButton = ({
  label,
  color,
  variant,
  children,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <Button
      color={color ? color : 'primary'}
      variant={variant ? variant : 'contained'}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
      {children}
    </Button>
  )
}

export default BaseButton
