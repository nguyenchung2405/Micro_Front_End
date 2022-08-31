import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAllUserCreatedWithGroup, setUserSearchedList, showAddModal as showAddModalReducer } from "../../redux/features/groupListSlice"
import { Modal } from 'antd';
import "./modal.css"
import MemberInfor from './memberInfor';
import { Scrollbars } from 'react-custom-scrollbars';

export default function AddModal(props) {

    let {userSearchedList} = useSelector(state => state.groupList);
    let {userCreatedWithGroup} = useSelector(state => state.groupList);
    let { showCreateModal } = useSelector(state => state.groupList);
    const dispatch = useDispatch();
    let [tenNhom,setTenNhom] = useState("");
    let [tenCanTim,setTenCanTim] = useState("");
    let [showAlertTenNhom,setShowAlertTenNhom] = useState(false);
    

    const handleOk = () => {
        if(tenNhom === ""){
            setShowAlertTenNhom(true);
        } else {
            dispatch({type: "CREATE_GOUP", data: {users: userCreatedWithGroup, tenNhom}});
        }
        
    };

    const handleCancel = () => {
        dispatch(showAddModalReducer());
    };

    const renderMemberList = () => {
        return userSearchedList.map((user, index) => {
            return <MemberInfor infor={user} key={index} />
        })
    }

    return (
        <div className="addModal">
            <Modal footer={
            <div>
                <div><span>{userSearchedList.length} thành viên</span></div>
                <div className="addModal__buttons">
                    <button type="button" class="ant-btn ant-btn-default" onClick={()=>{dispatch(removeAllUserCreatedWithGroup());}}><span>Xóa</span></button>
                    <button type="button" class="ant-btn ant-btn-primary" onClick={handleOk}><span>Tạo</span></button>
                </div>
            </div>} 
            width="600px" title="Tạo Nhóm" visible={showCreateModal} 
            onCancel={handleCancel} 
            okText={"Tạo"} cancelText={"Xóa"}
            afterClose={()=>{
                setTenNhom("");
                setTenCanTim("");
                setShowAlertTenNhom(false);
                dispatch(setUserSearchedList());
            }}
            >
                <div className="features">
                    <p><label htmlFor="tenNhom">Tên nhóm</label></p>
                    <input id="tenNhom" type="text" value={tenNhom !== "" ? tenNhom : ""} onChange={(e)=>{
                        let {value} = e.target;
                        setTenNhom(value);
                    }} />

                    { showAlertTenNhom
                      ?
                      <p className="features__alert">* Tên nhóm không được để trống</p>
                      :
                      ""
                    }
                </div>
                <div>
                    <p><label htmlFor="timTV">Tìm thành viên</label></p>
                    <div className="addModal__tim">
                        <span className="addModal__tim__icon" onClick={()=>{
                            dispatch({type: "SEARCH_USER", nameNeedToSearch: tenCanTim })
                        }}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9.98856" cy="9.98856" r="8.98856" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.2402 16.7071L19.7643 20.222" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span style={{ width: "100%" }}>
                            <input id="timTV" type="text" value={tenCanTim !== "" ? tenCanTim : ""} onChange={(e)=>{
                                setTenCanTim(e.target.value);
                            }}/>
                        </span>
                    </div>
                </div>
                <Scrollbars autoHeight="true" autoHide >
                {renderMemberList()}
                </Scrollbars>
            </Modal>
        </div>
    )
}
