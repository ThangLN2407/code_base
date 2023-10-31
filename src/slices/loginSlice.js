import { createSlice } from '@reduxjs/toolkit'
import { handleFulfilled, handlePending, handleRejected } from './handleState'
import { loginRequest } from '../api/login'

const initialState = {}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Login
    builder.addCase(loginRequest.pending, state => {
      handlePending(state)
    })
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      const res = action.payload.data
      console.log('🚀 ~ file: index.js:21 ~ builder.addCase ~ res:', res)
      handleFulfilled(state)
    })
    builder.addCase(loginRequest.rejected, state => {
      handleRejected(state)
    })
  },
})

const { reducer: loginReducer } = loginSlice

// export const {} = loginSlice.actions

export default loginReducer
