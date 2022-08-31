import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showEditModal as showEditModalReducer } from "../../redux/features/groupListSlice";
import { Tabs } from "antd";
import { Scrollbars } from "react-custom-scrollbars";

export default function EditModal() {
  const { showEditModal } = useSelector((state) => state.groupList);
  const { editGroup } = useSelector((state) => state.groupList);
  const {removeUserList} = useSelector(state => state.groupList);
  const {addUserList} = useSelector(state => state.groupList);
  let [findNameAddMoDal,setFindNameAddMoDal] = useState("");
  let [findNameRemoveMoDal,setFindNameRemoveMoDal] = useState("");
  let [changedGroupName,setChangedGroupName] = useState(false);
  let { name,id } = editGroup;
  let [groupName,setGroupName] = useState(name);
  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(showEditModalReducer());
  };

  const renderAddList = () => {
    if(findNameAddMoDal !== ""){
      let addUserListNew = addUserList.filter((user)=>{ 
        let userName = user.full_name.toLowerCase();
        let index = userName.indexOf(findNameAddMoDal.toLowerCase());
        if(index !== -1){
          return user;
        }
      });
      return addUserListNew.map((user, index) => {
        return (
          <div className="memberList" key={index}>
            <div className="memberList__infor">
              <span>{user.full_name.toLowerCase()}</span>
              <div className="memberList__infor__PB">
                  <span>{user.department.data[0].dep_name.toLowerCase()}</span>
              </div>
            </div>
            <button onClick={()=>{
              dispatch({type: "ADD_USER_TO_GROUP", payload: {user_id: user.id, group_id: id} });
            }}>Thêm</button>
          </div>
        );
      });
    } else {
      return addUserList.map((user, index) => {
        return (
          <div className="memberList" key={index}>
            <div className="memberList__infor">
              <span>{user.full_name.toLowerCase()}</span>
              <div className="memberList__infor__PB">
                  <span>{user.department.data[0].dep_name.toLowerCase()}</span>
              </div>
            </div>
            <button onClick={()=>{
              dispatch({type: "ADD_USER_TO_GROUP", payload: {user_id: user.id, group_id: id} });
            }}>Thêm</button>
          </div>
        );
      });
    }
  };

  const renderRemoveList = () => {
    if(findNameRemoveMoDal !== ""){
      let removeUserListNew = removeUserList.filter((user)=>{ 
        let userName = user.full_name.toLowerCase();
        let index = userName.indexOf(findNameRemoveMoDal.toLowerCase());
        if(index !== -1){
          return user;
        }
      });
      return removeUserListNew.map((user, index) => {
        return (
          <div className="memberList" key={index}>
            <div className="memberList__infor">
              <span>{user.full_name.toLowerCase()}</span>
              <div className="memberList__infor__PB">
                  <span>{user.department.data[0].dep_name.toLowerCase()}</span>
              </div>
            </div>
            <button className="btn__remove" onClick={()=>{
              dispatch({type: "REMOVE_USER_FROM_GROUP", payload: {user_id: user.id, group_id: id}})
            }}>Xóa</button>
          </div>
        );
      });
    } else {
      return removeUserList.map((user, index) => {
        return (
          <div className="memberList" key={index}>
            <div className="memberList__infor">
              <span>{user.full_name.toLowerCase()}</span>
              <div className="memberList__infor__PB">
                  <span>{user.department.data[0].dep_name.toLowerCase()}</span>
              </div>
            </div>
            <button className="btn__remove" onClick={()=>{
              dispatch({type: "REMOVE_USER_FROM_GROUP", payload: {user_id: user.id, group_id: id}})
            }}>Xóa</button>
          </div>
        );
      });
    }
  };

  useEffect(()=>{
    setGroupName(name);
  },[name])

  useEffect(()=>{
    setGroupName(groupName);
  },[groupName]);

  return (
    <div className="editModal">
      <Modal
        width="600px"
        title={changedGroupName 
          ? 
          <input className="ant-modal-title" type="text" value={groupName} 
          onChange={(e)=>{
            setGroupName(e.target.value);
          }} 
          onDoubleClick={()=>{
            setChangedGroupName(false);
            dispatch({type: "CHANGE_GROUP_NAME", data: {newGroupName: groupName, id}});
          }} /> 
          :
          <div class="ant-modal-title" id=":r3:" onDoubleClick={()=>{
            setChangedGroupName(true)
          }}>{groupName}</div>}
        visible={showEditModal}
        footer={null}
        onCancel={handleCancel}
        afterClose={()=>{
          setFindNameAddMoDal("");
          setFindNameRemoveMoDal("");
        }}
      >
        <Tabs defaultActiveKey="1" animated={{ inkBar: false, tabPane: false }}>
          <TabPane
            tab={
              <div className="edit editModal__header__add">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.246 17.44C5.25912 17.44 1 18.1937 1 21.2139C1 24.2328 5.23188 25.0151 10.246 25.0151C15.233 25.0151 19.4921 24.26 19.4921 21.2412C19.4921 18.2223 15.2602 17.44 10.246 17.44Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.246 13.1325C13.536 13.1325 16.1722 10.4951 16.1722 7.20633C16.1722 3.91632 13.536 1.28015 10.246 1.28015C6.95729 1.28015 4.31982 3.91632 4.31982 7.20633C4.31982 10.4951 6.95729 13.1325 10.246 13.1325Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.3458 8.95929V14.1616"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.9999 11.5602H19.6938"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Thêm</p>
              </div>
            }
            key="1"
          >
            <div className="Tab1">
              <p>
                <label htmlFor="timTV">Tìm thành viên</label>
              </p>
              <div className="addModal__tim">
                <span>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9.98856"
                      cy="9.98856"
                      r="8.98856"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.2402 16.7071L19.7643 20.222"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span style={{ width: "100%" }}>
                  <input id="timTV" type="text" value={findNameAddMoDal !== "" ? findNameAddMoDal : ""} onChange={(e)=>{
                    let {value} = e.target;
                    setFindNameAddMoDal(value);
                  }}/>
                </span>
              </div>
            </div>
            <Scrollbars autoHeight="true" autoHide="true">
              {renderAddList()}
            </Scrollbars>
            <p style={{ margin: "20px 0px 0px 0px", textAlign: "center" }}>
              {
                addUserList.length
              }{" "}
              thành viên
            </p>
          </TabPane>
          <TabPane
            tab={
              <div className="edit editModal__header__remove">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.246 17.44C5.25912 17.44 1 18.1937 1 21.2139C1 24.2328 5.23188 25.0151 10.246 25.0151C15.233 25.0151 19.4921 24.26 19.4921 21.2412C19.4921 18.2223 15.2602 17.44 10.246 17.44Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.246 13.1325C13.536 13.1325 16.1722 10.4951 16.1722 7.20633C16.1722 3.91632 13.536 1.28015 10.246 1.28015C6.95729 1.28015 4.31982 3.91632 4.31982 7.20633C4.31982 10.4951 6.95729 13.1325 10.246 13.1325Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.9999 11.5602H19.6938"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Xóa</p>
              </div>
            }
            key="2"
          >
            <div className="Tab1">
              <p>
                <label htmlFor="timTV">Tìm thành viên</label>
              </p>
              <div className="addModal__tim">
                <span>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9.98856"
                      cy="9.98856"
                      r="8.98856"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.2402 16.7071L19.7643 20.222"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span style={{ width: "100%" }}>
                  <input id="timTV" type="text" value={findNameRemoveMoDal !== "" ? findNameRemoveMoDal : ""} onChange={(e)=>{
                    let {value} = e.target;
                    setFindNameRemoveMoDal(value);
                  }} />
                </span>
              </div>
            </div>
            <Scrollbars autoHeight="true" autoHide>
              {renderRemoveList()}
            </Scrollbars>
            <p style={{ margin: "20px 0px 0px 0px", textAlign: "center" }}>
              {
                removeUserList.length
              }{" "}
              thành viên
            </p>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}
