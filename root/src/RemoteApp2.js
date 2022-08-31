import React, {Suspense} from 'react'
const RemoteApp2 = React.lazy(() => import("Remote2/App"));

export default function RemoteApp2Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}><RemoteApp2 /></Suspense>
  )
}
