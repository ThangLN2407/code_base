import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import BaseInput from '../../components/Base/Input'
import BaseButton from '../../components/Base/Button'
import BaseRadio from '../../components/Base/RadioBox'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  radioOption: Yup.string().required('Please select a radio option'),
})

const ValidationYup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      radioOption: '',
    },
    validationSchema,
    onSubmit: values => {
      // Handle form submission here
      console.log(values)
    },
  })

  const radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseInput
        field={formik.getFieldProps('name')}
        form={formik}
        label="Name"
      />
      <BaseRadio
        name="radioOption"
        label="Select an option"
        options={radioOptions}
      />
      <BaseButton type="submit" label="Submit" />
    </form>
  )
}

export default ValidationYup
