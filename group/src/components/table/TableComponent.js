import { Button } from 'antd'
import React, { useEffect } from 'react'
import TableGroup from './Table'
import "./table.css"
import AddModal from '../modal/addModal'
import { useDispatch } from 'react-redux'
import { showAddModal } from '../../redux/features/groupListSlice'
import EditModal from '../modal/editModal'

export default function TableComponent() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: "GET_USER_GROUP"});
  },[dispatch])

  return (
    <div className="border">
      <div className="border__header">
        <span>Danh sách nhóm</span>
        <Button onClick={() => {
          dispatch(showAddModal());
        }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 7.89911H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.99948 14.901V0.901001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Tạo nhóm
        </Button>
      </div>
      <div className="border__table">
        <TableGroup />
      </div>
      <AddModal />
      <EditModal />
    </div>
  )
}
