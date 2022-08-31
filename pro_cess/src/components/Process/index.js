import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import Table from "./Table/Table";
import Employee from "./Employee/Employee";
import Border from "./Border/Border";
import Employ from "./Employ/Employ";

// import Create from './Create/Create';
function Process() {
  return (
    <div style={{
      // background:'#E5E5E5'
    }}>
      <div className="App"
        style={{
  
          margin: 'auto',
          background: 'white',
          width: 1154,
          height: 1297,
          top: 0,
          left: 0,
          borderRadius: 12
        }}>
       
        <Employee />
        
        
        <Table />
       

        <Employ />
        <Border />
      </div>
    </div>

  );
}

export default Process;
