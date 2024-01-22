import { createSlice } from '@reduxjs/toolkit'
import { LoginRequest } from '../api/login'
import Storage from '../utils/Storage'

const initialState = {
  isLogin: false,
}

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Login
    builder.addCase(LoginRequest.pending, state => {
      state.isLogin = false
    })
    builder.addCase(LoginRequest.fulfilled, (state, action) => {
      state.isLogin = true
      const res = action.payload.data

      if (res?.success) {
        Storage.setItem('access_token', res.data.access_token)
      }
      return true
    })
    builder.addCase(LoginRequest.rejected, state => {
      state.isLogin = false
    })
  },
})

const { reducer: LoginReducer } = LoginSlice

// export const {} = loginSlice.actions

export default LoginReducer
