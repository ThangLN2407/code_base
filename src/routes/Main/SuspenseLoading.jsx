import React, { Suspense } from 'react'
import LoadingPage from '../../components/LoadingPage'

const SuspenseLoading = React.forwardRef(({ children }, ref) => {
  return (
    <>
      <Suspense ref={ref} fallback={<LoadingPage></LoadingPage>}>
        {children}
      </Suspense>
    </>
  )
})
SuspenseLoading.displayName = 'SuspenseLoading'
export default SuspenseLoading
