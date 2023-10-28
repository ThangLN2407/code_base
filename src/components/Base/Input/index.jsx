import { TextField, TextareaAutosize } from '@mui/material'
import React from 'react'
import { debounce } from 'lodash'
import { useState } from 'react'

const BaseInput = ({
  isTextArea,
  onChange,
  validate,
  errorMessage,
  ...props
}) => {
  const debouncedOnChange = debounce(handleInputChange, 500)
  const [error, setError] = useState('')

  const handleInputChange = event => {
    const inputValue = event.target.value
    onChange(event)

    // Kiểm tra validate
    if (validate && !validate(inputValue)) {
      setError(errorMessage)
    } else {
      setError('')
    }
  }

  return isTextArea ? (
    <>
      <TextareaAutosize
        {...props}
        onChange={handleInputChange}
      ></TextareaAutosize>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  ) : (
    <>
      <TextField {...props} onChange={debouncedOnChange}></TextField>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}

export default BaseInput
