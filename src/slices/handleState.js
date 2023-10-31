export const handlePending = state => {
  state.isLoading = true
  state.error = ''
}

export const handleFulfilled = state => {
  state.isLoading = false
  state.error = ''
}
export const handleRejected = state => {
  state.isLoading = false
}
