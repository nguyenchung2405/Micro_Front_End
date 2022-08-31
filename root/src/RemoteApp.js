import React, {Suspense} from 'react'
const RemoteApp = React.lazy(() => import("Remote/App"));
console.log("RemoteApp");
export default function RemoteAppComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}><RemoteApp /></Suspense>
  )
}
