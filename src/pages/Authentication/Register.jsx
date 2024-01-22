// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import * as Yup from 'yup'
// import { useFormik } from 'formik'
// import BaseInput from '@/components/Base/Input'
// import BaseButton from '@/components/Base/Button'

// import { useTranslation } from '@/hooks/useTranslation'
// import styles from './styles.module.scss'
// import Card from '@/components/Card'

// const Register = () => {
//   const { t } = useTranslation()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .required(t('required', { field: t('email') }))
//       .email(t('invalid', { field: t('email') })),
//     password: Yup.string().required(t('required', { field: t('password') })),
//   })

//   const formik = useFormik({
//     initialValues: {
//       password: '',
//       email: '',
//     },
//     validationSchema,
//     onSubmit: async values => {},
//   })

//   return (
//     <div className={`relative ${styles.relative_box}`}>
//       <Card classes={`d-flex flex-col ${styles.box_card}`}>
//         <div className="d-flex justify-content-center">
//           <div className={`${styles.temp_logo}`}>logo</div>
//         </div>
//         <div className={styles.text_sign_in}>{t('login:sign_in')}</div>
//         <form onSubmit={formik.handleSubmit}>
//           <div>
//             <BaseInput
//               field={formik.getFieldProps('email')}
//               form={formik}
//               label={t('login:email')}
//             />
//           </div>
//           <div className="mt-4">
//             <BaseInput
//               field={formik.getFieldProps('password')}
//               form={formik}
//               type={'password'}
//               label={t('login:password')}
//             />
//           </div>
//           <BaseButton
//             label={t('login:sign_in')}
//             type="submit"
//             className={styles.sign_in_btn}></BaseButton>
//         </form>
//       </Card>
//     </div>
//   )
// }

// export default Register
