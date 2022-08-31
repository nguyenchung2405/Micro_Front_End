import React, { useState } from "react";
import { Table, Checkbox, Button, Radio, Divider } from "antd";
import "./Border.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Họ và tên ",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Phòng ban",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "Chức vụ",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "Tự đánh giá",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Cấp 100",
    dataIndex: "level100",
    key: "level100",
  },
  {
    title: "Cấp 200",
    dataIndex: "level200",
    key: "level200",
  },
  {
    title: "Cấp 300",
    dataIndex: "level300",
    key: "level300",
  },
  {
    title: "Bình quân gia quyền",
    dataIndex: "score",
    key: "score",
    // render: (text) => <Checkbox />,
  },
  //   {
  //     title: "Chấm kết thúc",
  //     dataIndex: "address",
  //     key: "address",
  //     render: (text) => <Checkbox />,
  //   },
  {
    title: "Thao tác",
    key: "action",
    render: (record) => {
      return (
        <>
          <Button className="edit_border">
            <EditOutlined />
            Xử lý
          </Button>
        </>
      );
    },
  },
];

const data = [
  // {
  //   key: "1",
  //   name: "Nguyễn Văn Tài",
  //   room: "Phòng CNTT",
  //   level: "Nhân viên",
  //   number: " 90",
  //   level100: " 90",
  //   level200: " 100",
  //   level300: " 100",
  //   score: " 100",
  //   address: "New York No. 1 Lake Park",
  // },
  // {
  //   key: "2",
  //   name: "Nguyễn Văn A",
  //   room: "Phòng CNTT",
  //   level: "Nhân viên",
  //   number: " 90",
  //   level100: " 90",
  //   level200: " 100",
  //   level300: " 100",
  //   score: " 100",
  //   address: "London No. 1 Lake Park",
  // },
  // {
  //   key: "3",
  //   name: "Nguyễn Văn B",
  //   room: "Phòng CNTT",
  //   level: "Nhân viên",
  //   number: " 90",
  //   level100: " 90",
  //   level200: " 80",
  //   level300: " 100",
  //   score: " 100",
  //   address: "Sidney No. 1 Lake Park",
  // },
  // {
  //   key: "4",
  //   name: "Nguyễn Văn C",
  //   room: "Phòng CNTT",
  //   level: "Nhân viên",
  //   number: " 90",
  //   level100: " 90",
  //   level200: " 100",
  //   level300: " 90",
  //   score: " 100",
  //   address: "Sidney No. 1 Lake Park",
  // },
  // {
  //   key: "5",
  //   name: "Nguyễn Văn D",
  //   room: "Phòng CNTT",
  //   level: "Nhân viên",
  //   number: "100",
  //   level100: " 80",
  //   level200: " 90",
  //   level300: " 100",
  //   score: " 90",
  //   address: "Sidney No. 1 Lake Park",
  // },
  // {
  //   key: "6",
  //   name: "Nguyễn Văn B",
  //   room: "Phòng CNTT",
  //   level: "Nhân viên",
  //   number: " 90",
  //   level100: " 100",
  //   level200: " 60",
  //   level300: " 100",
  //   score: " 100",
  //   address: "Sidney No. 1 Lake Park",
  // },
  // {
  //   key: "7",
  //   name: "Nguyễn Văn B",
  //   room: "Phòng CNTT",
  //   level: "Nhân viên",
  //   number: "100",
  //   level100: " 90",
  //   level200: " 100",
  //   level300: " 100",
  //   score: " 100",
  //   address: "Sidney No. 1 Lake Park",
  // },
];
for (let i = 0; i < 60; i++) {
  data.push({
    key: i,

    name: `Nguyễn Văn C `,
    
    room: "Phòng CNTT",
    level: "Nhân viên",
    number: " 90",
    level100: " 90",
    level200: " 100",
    level300: " 100",
    score: " 100",
  });
}
// const rowSelections = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === "Disabled User",
//     // Column configuration not to be checked
//     name: record.name,
//   }),
// };

const TableComponent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // const [selectionType, setSelectionType] = useState("checkbox");
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      <Table
        className="border-text"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          className: "pagination-load",
          position: ["bottomLeft"],
          showTotal: (total, range) =>
            `Hiển thị ${range[0]}-${range[1]} trong ${total} trang`,
          showSizeChanger: true,
          locale: {range: "Hiển thị"},
          // pageSizeOptions: ["10", "20", "30", "40", "50"],
          // footer: false,
          // itemRender: (current, type, originalElement) => {
          //   if (type === "prev") {
          //     return <a>Trang trước</a>;
          //   } else if (type === "next") {
          //     return <a>Trang sau</a>;
          //   }
          //   return originalElement;
          // }
          // defaultPageSize: 20,
          // defaultCurrent: 10,
          locale: {items_per_page: ""},
        }}
        locale={{ range: '/ ' }}
        // dataSource={data}
        total={85}
        defaultPageSize={20}
        defaultCurrent={10}
      />
    </div>
  );
};

export default TableComponent;
