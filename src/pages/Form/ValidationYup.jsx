import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import BaseInput from '../../components/Base/Input'
import BaseButton from '../../components/Base/Button'
import BaseRadio from '../../components/Base/RadioBox'
import BaseDatePicker from '../../components/Base/DatePicker'
import dayjs from 'dayjs'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('email trong').email('email khong hop le'),
  radioOption: Yup.string().required('Please select a radio option'),
  date: Yup.date().required('Date is required'),
})

const ValidationYup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      radioOption: '',
      date: null,
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

  const handleChangeDate = date => {
    console.log(dayjs(date).format('YYYY/MM/DD'))
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseInput
        field={formik.getFieldProps('name')}
        form={formik}
        customOnChange={e => {
          console.log('Custom onChange event:', e.target.value)
        }}
      />
      <BaseRadio
        field={formik.getFieldProps('radioOption')}
        form={formik}
        label="Select an option"
        options={radioOptions}
        customOnChange={e => {
          console.log('Custom onChange event:', e.target.value)
        }}
      />
      <BaseDatePicker name="date" label="Select a date" form={formik} />

      <BaseButton type="submit" label="submit" />
    </form>
  )
}

export default ValidationYup
