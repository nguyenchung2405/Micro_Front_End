import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveUserCreatedWithGroup } from '../../redux/features/groupListSlice';

export default function MemberInfor(props) {
    // let [clicked,setClicked] = useState(false)
    const {userCreatedWithGroup} = useSelector(state => state.groupList);
    let { infor } = props;
    const dispatch = useDispatch();

    return (
        <div className="memberList">

            <div className="memberList__infor">
                <span>{infor.full_name.toLowerCase()}</span>
                <div className="memberList__infor__PB">
                    <span>{infor.department.data[0].dep_name.toLowerCase()}</span>
                </div>
            </div>
            { userCreatedWithGroup.findIndex(id => id === infor.id) !== -1 
                ? 
                    <button className="btn__remove" onClick={()=>{
                    dispatch(addRemoveUserCreatedWithGroup(infor.id)); 
                }}>Xóa</button> 
                :
                <button onClick={()=>{
                    dispatch(addRemoveUserCreatedWithGroup(infor.id)); 
                }}>Thêm</button> }
        </div>
    )
}
