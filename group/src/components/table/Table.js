import React, { useState } from "react";
import { Table, Button, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm } from 'antd';
import {showAlert as showAlertAntd} from "../../redux/features/groupListSlice";

export default function TableGroup() {
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(3);
  const { list } = useSelector((state) => state.groupList);
  const { showAlert } = useSelector((state) => state.groupList);
  const { Column, ColumnGroup } = Table;
  const dispatch = useDispatch();
  let count = 1;
  let data = [...list];
  data.sort((a, b) => a.id - b.id);
  let total = data.length;

  const editGroup = (props) => {
    dispatch({type:"EDIT_MODAL", payload: {id: props, count}});
    count += 1;
  };

  const removeGroup = (props)=>{
    dispatch({type:"REMOVE_GROUP", id: props});
  }

  // const renderAlert = ()=>{
  //   return <Alert message="Thao tác thành công" type="success" showIcon closable />
  // }

  return (
    <div>
    { showAlert
    ?
    <Alert message="Thao tác thành công" type="success" showIcon closable afterClose={()=>{
      dispatch(showAlertAntd(false))
    }}/>
    :
    ""
    }
    
    <Table
      dataSource={data}
      pagination={{
        position: ["bottomLeft"],
        defaultPageSize: 3,
        locale: { items_per_page: "" },
        defaultCurrent: 1,
        showSizeChanger: true,
        total: total,
        pageSizeOptions: [3, 5, 10],
        onChange: (page, pageNumber) => {
          setPageNumber(pageNumber);
          setPage(page);
        },
        showTotal: (total) => {
          if (pageNumber * page < total) {
            return `Hiển thị ${pageNumber * page} trong ${total}`;
          }
          return `Hiển thị ${total} trong ${total}`;
        },
      }}
    >
      <Column title="Tên nhóm" dataIndex="name" key="tenNhom" />
      <Column
        title="Thành viên"
        dataIndex="member_total"
        key="soLuongThanhVien"
        render={(text, record, index) => {
          return record.member_total + " thành viên";
        }}
      />
      <div>
        <ColumnGroup title="">
          <Column
            title=""
            dataIndex="id"
            key="chinhSua"
            render={(props) => {
              return (
                <Button type="success" onClick={() => {
                    editGroup(props);
                  }}> Chỉnh sửa
                </Button>
              );
            }}
          />

          <Column
            title=""
            dataIndex="id"
            key="xoa"
            render={(props) => {
              return <Popconfirm 
              placement="topRight"
              title="Bạn có chắc muốn thực hiện thao tác này ?"
              okText="Có"
              cancelText="Không"
              onConfirm={()=>{
                removeGroup(props);
              }}
              >
                <Button type="custom">Xóa</Button>
              </Popconfirm>
            }}
          />
        </ColumnGroup>
        
      </div>
      
    </Table>
    </div>
   
    
  );
}
