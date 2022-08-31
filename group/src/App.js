import React from "react";
import './App.css';
import TableComponent from './components/table/TableComponent';
import {Provider} from "react-redux";
import {store} from "./redux/configStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App" 
      style={{ display: "flex", justifyContent: "center", backgroundColor: "#E5E5E5" }}>
      <TableComponent/>
      </div>
    </Provider>
  );
}
export default App;