import { FormControlLabel, Switch } from '@mui/material'
import React from 'react'

const BaseSwitch = ({ label, value, onChange, ...props }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Switch color="primary" />}
      label={label}
      onChange={onChange}
    />
  )
}

export default BaseSwitch
