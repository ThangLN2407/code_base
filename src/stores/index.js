import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/loginSlice'

const combinedReducer = combineReducers({
  login: loginReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'requestLogout/fulfilled') {
    return combinedReducer(undefined, action)
  } else return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
})
