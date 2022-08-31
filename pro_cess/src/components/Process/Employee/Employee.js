import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./Employee.css";
import {
  SearchOutlined,
  PlusOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import Employ from "../Employ/Employ";
import Create from "../Create/Create";
export default function Employee() {
  const [isModal, setIsModal] = useState(false);
  const showModal = () => {
    setIsModal(true);
  };
  // const handleOk = () => {
  //   setIsModal(false);
  // };
  const handleCancel = () => {
    setIsModal(false);
  };
  return (
    <div className="EmpScore">
      <div>
        <div
          className="employee-div"
          // style={{
          //   display: "flex",
          //   alignContent: "center",
          //   justifyContent: "space-between",
          // }}
        >
          <h1
            className="heading"
            // style={{
            //   width: 468,
            //   height: 27,
            //   fontWeight: 800,
            //   fontSize: 24,
            //   color: "#434349",
            //   marginTop:30,
            //   marginLeft:20
            // }}
          >
            Danh sách quy trình chấm điểm
          </h1>
          <Button
            className="btn-create-process"
            onClick={showModal}
            // style={{

            //   width: 168,
            //   height: 40,
            //   background: "#35794A",
            //   borderRadius: 4,
            //   color: "#FFFFFF",
            //   marginRight:38  ,

            // }}
          >
            <PlusOutlined />
            Tạo quy trình
          </Button>
        </div>
        <hr
          style={{
            width: 1154,
            height: 1,
            margin: "29px 0",
            background: "#EEEFF3",
            border: "0 none",
            color: "#EEEE",
          }}
        />
        <div
          className="modal-table"
          // style={{
          //    marginTop: 30,
          //    display: "flex",
          //    justifyContent: "space-between",
          //    alignItems: "center",
          //    }}
        >
          <Modal
            footer={null}
            visible={isModal}
            // onOk={handleOk}
            onCancel={handleCancel}
          >
            <Create />
          </Modal>

          <Input
            className="input-group"
            placeholder="Nhóm A"
            // style={{
            //   width: 215,
            //   height: 44,
            //   background: "#F0F5FA",
            //   borderRadius: 3,
            //   marginLeft: 20,

            // }}
          />
          <Input
            className="input-person"
            placeholder="Người chấm"
            // style={{
            //   width: 215,
            //   height: 44,
            //   background: "#F0F5FA",
            //   borderRadius: 3,

            // }}
          />
          <Input
            className="input-level"
            placeholder="Cấp chấm"
            // style={{
            //   width: 225,
            //   height: 44,
            //   background: "#F0F5FA",
            //   borderRadius: 3,
            //   marginLeft: 10,
            // }}
          />
          <Input
            className="input-number2"
            placeholder="Hệ số"
            // style={{
            //   width: 153,
            //   height: 44,
            //   background: "#F0F5FA",
            //   borderRadius: 3,
            //   marginLeft: 10,
            // }}
          />
          <Button
            className="button-search2"
            // style={{
            //   width: 151,
            //   height: 44,
            //   float: "right",
            //   background: "#3699FF",
            //   border: "1px solid #3699FF",
            //   borderRadius: 3,
            //   marginRight:38,

            //   color: "#FFFFFF",
            // }}
          >
            <FileSearchOutlined />
            Tìm kiếm
          </Button>
        </div>
      </div>
    </div>
  );
}
