import React from 'react'
import TextField from '@mui/material/TextField'

const BaseInput = props => {
  const { field, form, label, customOnChange, ...rest } = props

  const handleChange = e => {
    const { target } = e
    form.setFieldValue(field.name, target.value)

    if (customOnChange) {
      customOnChange(e)
    }
  }

  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      {...field}
      {...rest}
      onChange={handleChange}
      error={form.touched[field.name] && Boolean(form.errors[field.name])}
      helperText={form.touched[field.name] && form.errors[field.name]}
    />
  )
}

export default BaseInput
