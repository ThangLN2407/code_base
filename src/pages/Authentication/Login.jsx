import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { LoginRequest } from './../../api/login'
import BaseButton from '../../components/Base/Button'
import Card from '../../components/Card'
import BaseInput from '../../components/Base/Input'
import { useTranslation } from '../../hooks/useTranslation'
import styles from './styles.module.scss'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    email: Yup.string()
      .required(t('error:required', { field: t('login:email') }))
      .email(t('error:invalid', { field: t('login:email') })),
    password: Yup.string().required(
      t('error:required', { field: t('login:password') }),
    ),
  })

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const res = await dispatch(LoginRequest({ values }))

        if (res) {
          navigate('/dashboard')
        }
      } catch (error) {
        console.log('error', error)
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
          <div className={styles.text_sign_in}>{t('login:sign_in')}</div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <BaseInput
                field={formik.getFieldProps('email')}
                form={formik}
                label={t('login:email')}
              />
            </div>
            <div className="mt-4">
              <BaseInput
                field={formik.getFieldProps('password')}
                form={formik}
                type={'password'}
                label={t('login:password')}
              />
            </div>
            <BaseButton
              label={t('login:sign_in')}
              type="submit"
              className={styles.sign_in_btn}
            ></BaseButton>
          </form>

          <Link to="/register" className={styles.register_link}>
            {t('login:goto_register')}
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default Login
