import React from "react";
import { Route, Routes } from "react-router-dom";
import Buttons from "./Buttons";
import ErrorBoundary from "./ErrorBoundary";
import RemoteAppComponent from "./RemoteApp";
import RemoteApp2Component from "./RemoteApp2";
import "./App.css"
// const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children, display }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
      display
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

function App() {
  return (
   <div>
   <Buttons/>
      <Routes>
        <Route path="/group" element={<RemoteAppComponent />} />
        <Route path="/process" element={<RemoteApp2Component />} />
      </Routes>
   </div>
  );
}
export default App;