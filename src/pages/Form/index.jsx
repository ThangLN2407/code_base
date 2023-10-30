import React, { useState } from 'react'
import BaseButton from '../../components/Base/Button'
import BaseSelect from '../../components/Base/SelectBox'

import AutocompleteData from '../../data/select-box.json'
import { MenuItem, Select } from '@mui/material'
import BaseSwitch from '../../components/Base/Switch'
import BaseInput from '../../components/Base/Input'
import ValidationYup from './ValidationYup'

const FormPage = () => {
  const handleClickEvent = e => {
    console.log('event', e)
  }
  const optionsAuto = AutocompleteData.autocomplete
  const arrayCom = AutocompleteData.arrayComplete

  const [autoValue, setAutoValue] = useState(null)

  const handleChangeAuto = e => {
    console.log('event', e)
    setAutoValue(e)
  }

  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = event => {
    console.log('🤪 ~ file: index.jsx:24 [] -> event : ', event)
    setSelectedOption(event.target.value)
  }
  const handleChangeInput = event => {
    console.log(
      '🚀 ~ file: index.jsx:31 ~ handleChangeInput ~ event:',
      event.target.value,
    )
  }

  return (
    <>
      <ValidationYup></ValidationYup>
      <div>FormPage</div>
      <br></br>
      <div>
        <div>button</div>
        <div>
          <BaseButton variant="contained" onClick={handleClickEvent}>
            btn1
          </BaseButton>
          <BaseButton variant="outlined">btn2</BaseButton>
          <BaseButton label="hello" />
          <BaseButton variant="contained" disabled>
            btn4 disabled
          </BaseButton>
        </div>
      </div>
      <br></br>
      <div>
        <div>select box</div>
        <br></br>
        <div>
          Autocomplete
          <br></br>
          array obj
          <BaseSelect
            disableClearable
            isAutoComplete
            options={optionsAuto}
            onChange={handleChangeAuto}
            label="autocomplete options"
          />
          <br></br>
          array
          <BaseSelect
            label="Select an option"
            options={optionsAuto}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
      </div>
      <br></br>
      <div>
        switch
        <br />
        <BaseSwitch label="select switch" labelPlacement="top" />
      </div>
      <br></br>
      <div>text input</div>
      <br></br>
      {/* <BaseInput onChange={handleChangeInput} /> */}
    </>
  )
}

export default FormPage
