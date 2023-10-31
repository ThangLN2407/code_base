import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { loginRequest } from './../../api/login'
import BaseButton from '../../components/Base/Button'
import Card from '../../components/Card'
import BaseInput from '../../components/Base/Input'
import styles from './styles.module.scss'

const Login = () => {
  const { t } = useTranslation('login')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    email: Yup.string()
      .required(t('required', { field: t('email') }))
      .email(t('invalid', { field: t('email') })),
    password: Yup.string().required(t('required', { field: t('password') })),
  })

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema,
    onSubmit: async values => {
      // Handle form submission here
      console.log(values)
      try {
        const res = await dispatch(loginRequest({ values }))
        if (res?.payload?.success) {
          console.log(res)
        }
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <div className={`relative ${styles.relative_box}`}>
      <div
        className={`d-flex justify-content-around absolute ${styles.absolute_box}`}
      >
        <div>logo</div>
        <Card classes={`d-flex flex-col ${styles.box_card}`}>
          <div className="d-flex justify-content-center">
            <div className={`${styles.temp_logo}`}>logo</div>
          </div>
          <div className={styles.text_sign_in}>{t('sign_in')}</div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label className="d-block mb-3" htmlFor="email">
                {t('email')}
              </label>
              <BaseInput field={formik.getFieldProps('email')} form={formik} />
            </div>
            <div className="mt-4">
              <label className="d-block mb-3" htmlFor="email">
                {t('password')}
              </label>
              <BaseInput
                field={formik.getFieldProps('password')}
                form={formik}
              />
            </div>
            <BaseButton
              label={t('sign_in')}
              type="submit"
              className={styles.sign_in_btn}
            ></BaseButton>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default Login
