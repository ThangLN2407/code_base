import axiosClient from './API'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getError } from './../utils/handle_error'

// export const login = payloads => POST('/admin/login', payloads)
export const loginRequest = createAsyncThunk('login', async () => {
  try {
    const res = await Promise.all([
      axiosClient({
        method: 'POST',
        url: `/admin/login`,
      }),
    ])
    return res
  } catch (err) {
    console.log('🤪 [login/createAsyncThunk] -> err : ', 'color: #e2398d', err)

    // throw getError(err)
  }
})
