import React from 'react'
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

const BaseDatePicker = ({
  name,
  label,
  form,
  onChange,
  errorText,
  valueDefault,
  ...rest
}) => {
  const value = name && form ? form.values[name] : valueDefault
  const error =
    name && form ? form.touched[name] && form.errors[name] : errorText

  const handleChange = date => {
    name && form ? form.setFieldValue(name, date) : onChange(date)
  }

  return (
    <div>
      <MUIDatePicker value={value || null} onChange={handleChange} {...rest}>
        {({ inputProps, wrapperProps }) => (
          <TextField
            {...inputProps}
            fullWidth
            label={label}
            variant="outlined"
            error={error}
            InputLabelProps={{ shrink: true }}
          />
        )}
      </MUIDatePicker>
      {error && <FormHelperText error={true}>{error}</FormHelperText>}
    </div>
  )
}

export default BaseDatePicker
