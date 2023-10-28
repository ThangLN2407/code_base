import { Autocomplete, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const BaseSelect = ({
  isAutoComplete,
  returnObject,
  options,
  value,
  onChange,
  label,
  multiple,
  ...props
}) => {
  return (
    <>
      {isAutoComplete ? (
        <Autocomplete
          multiple={multiple}
          options={options}
          value={value}
          onChange={(_, newValue) => {
            if (newValue === null) {
              onChange(null)
            } else {
              onChange(returnObject ? newValue : newValue.value)
            }
          }}
          renderInput={params => <TextField {...params} label={label} />}
          {...props}
        />
      ) : (
        <Select value={value} label={label} onChange={onChange} {...props}>
          {options.length &&
            options.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
        </Select>
      )}
    </>
  )
}

export default BaseSelect
