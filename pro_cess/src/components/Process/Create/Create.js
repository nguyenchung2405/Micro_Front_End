import React, { useState } from "react";
import "./Create.css";
import { Input, Checkbox, Button, Modal } from "antd";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
// import  type {CheckboxChangeEvent} from "antd/lib/checkbox";
export default function Create() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="create-process">
      <h1
      className="scoring-step"
        // style={{
        //   height: 38.98,

        //   fontWeight: 700,
        //   fontSize: 26,
        //   color: " #000000",
        // }}
      >
        Bước chấm điểm
      </h1>
      <div>
        <p className="group-name"
          // style={{
          //   height: 19,
          //   fontWeight: 600,
          //   fontSize: 15,
          //   color: "#3F4254",
          //   opacity: 0.8,
          // }}
        >
          Tên nhóm:
        </p>
        <Input
        className="input-group-name"
          // placeholder="Group Name"
          // style={{
          //   width: 350,
          //   height: 40,
          //   background: "#F0F5FA",
          //   borderRadius: 3,
          //   marginBottom: 10,
          // }}
        />
      </div>

      <div>
        <p
        className="scorer"
          // style={{
          //   // width: 89,
          //   height: 19,
          //   fontWeight: 600,
          //   fontSize: 15,
          //   color: "#3F4254",
          //   opacity: 0.8,
          // }}
        >
          Người chấm:
        </p>
        <Input
        className="input-scorer"
          // placeholder="Scorer"
          // style={{
          //   width: 350,
          //   height: 40,
          //   background: "#F0F5FA",
          //   borderRadius: 3,
          //   marginBottom: 10,
          // }}
        />
      </div>
      <div>
        <p 
        className="level"
          // style={{
          //   height: 19,

          //   fontWeight: 600,
          //   fontSize: 15,
          //   color: "#3F4254",
          //   opacity: 0.8,
          // }}
        >
          Cấp chấm:
        </p>
        <Input
        className="input-grade"
          // placeholder="Grade level"
          // style={{
          //   width: 350,
          //   height: 40,
          //   background: "#F0F5FA",
          //   borderRadius: 3,

          //   marginBottom: 10,
          // }}
        />
      </div>
      <div>
        <p
        className="number"
          // style={{
          //   height: 19,

          //   fontWeight: 600,
          //   fontSize: 15,
          //   color: "#3F4254",
          //   opacity: 0.8,
          // }}
        >
          Hệ số:
        </p>
        <Input
        className="input-number"
          // placeholder="Coefficient"
          // style={{
          //   width: 350,
          //   height: 40,
          //   background: "#F0F5FA",
          //   borderRadius: 3,
          //   // marginLeft: 75,
          //   marginBottom: 10,
          // }}
        />
      </div>
      <br />
      <div style={{ float: "left", width: 350 }}>
         <Checkbox onChange={onChange}
         className="checkbox-1"
          // style={{
          //   // width: 22,
          //   height: 22,
          //   borderRadius: 5,
          //   borderStyle: "none",
          //   marginBottom: 21,
          //   color: "#434349",
          //   fontWeight: 500,
          //   fontSize: 15,
          // }}
        >{" "}
        Chấm tham khảo</Checkbox>
        <br />
        <Checkbox
        className="checkbox-2"
          // style={{
          //   // width: 22,
          //   height: 22,
          //   borderRadius: 5,
          //   color: "#434349",
          //   fontWeight: 500,
          //   fontSize: 15,
          // }}
        >{" "}
        Chấm kết thúc</Checkbox>
        <br /> <br />
      </div>
      <div
      className="button-create-delete"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-be",
        //   alignItems: "center",
        // }}
      >
        <Button
        className="button-delete"
          // style={{
          //   width: 110,
          //   height: 44,
          //   background: "#FFFFFF",
          //   border: "1px solid #35794A",
          //   borderRadius: 3,
          //   color: "#35794A",
          //   marginRight: 30
          // }}
        >
          <DeleteOutlined />
          Xóa
        </Button>
        <Button
        className="button-create"
          // style={{
          //   width: 110,
          //   height: 44,
          //   background: "#35794A",
          //   border: "1px solid #35794A",
          //   borderRadius: 5,
          //   fontSize: 18,
          //   color: "#FFFFFF",
          // }}
        >
          <PlusCircleOutlined />
          Tạo
        </Button>
      </div>
    </div>
  );
}
