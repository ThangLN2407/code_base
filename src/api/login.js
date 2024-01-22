import axiosClient from './Api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getError } from '../utils/HandleError'
import token from '../data/login.json'

const isSever = process.env.REACT_APP_IS_SERVER
export const LoginRequest = createAsyncThunk('login', async () => {
  try {
    if (!isSever) {
      const res = await Promise.all([
        axiosClient({
          method: 'POST',
          url: `/admin/login`,
        }),
      ])
      return res
    }
    return token
  } catch (err) {
    throw getError(err)
  }
})
