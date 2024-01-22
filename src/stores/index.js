import { combineReducers, configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../slices/LoginSlice'

const combinedReducer = combineReducers({
  login: LoginReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'requestLogout/fulfilled') {
    return combinedReducer(undefined, action)
  } else return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
})
