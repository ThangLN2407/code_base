import React from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import FormHelperText from '@mui/material/FormHelperText'
import { useField } from 'formik'

const BaseRadio = ({ name, label, options, validateSchema, ...rest }) => {
  const [field, meta] = useField(name)

  return (
    <div>
      <RadioGroup {...field} {...rest}>
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {meta.touched && meta.error && (
        <FormHelperText error={true}>{meta.error}</FormHelperText>
      )}
    </div>
  )
}

export default BaseRadio
