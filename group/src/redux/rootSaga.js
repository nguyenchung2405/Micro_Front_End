import { call, put, takeEvery } from 'redux-saga/effects'
import { addUserToGroupByAPI, changeGroupNameByAPI, createGroupAPI, getUserGroupAPI, getUserInGroupByIdAPI, getUserNotInGroupByIdAPI, removeGroupByAPI, removeUserFromGroupByAPI, searchUserToCreatGroupAPI } from './API/API';
import { getUserGroupList, getAddRemoveUserGroupList, showEditModal, getUserSearchedList , showAddModal, removeAllUserCreatedWithGroup, showAlert } from './features/groupListSlice';

function* getUserGroup(){
    const userGroup = yield call(getUserGroupAPI);
    yield put(getUserGroupList(userGroup));
}

function* getUserGroupByID(payload){
    let {id, count} = payload.payload;
    const userNotInGroupByID = yield call(getUserNotInGroupByIdAPI,id);
    const userInGroupByID = yield call(getUserInGroupByIdAPI,id);
    if(count % 2 === 0){
        yield put(showEditModal(id));
    } else {
        yield put(showEditModal(id));
        yield put(getAddRemoveUserGroupList({userInGroupByID,userNotInGroupByID}));
    }
}

function* addUserToGroup(payload){
    const {user_id, group_id} = payload.payload;
    yield call(addUserToGroupByAPI,user_id,group_id);
    const userNotInGroupByID = yield call(getUserNotInGroupByIdAPI,group_id);
    const userInGroupByID = yield call(getUserInGroupByIdAPI,group_id);
    yield put(getAddRemoveUserGroupList({userInGroupByID,userNotInGroupByID}));
}

function* removeUserFromGroup (payload){
    const {user_id, group_id} = payload.payload;
    yield call(removeUserFromGroupByAPI,user_id,group_id);
    const userNotInGroupByID = yield call(getUserNotInGroupByIdAPI,group_id);
    const userInGroupByID = yield call(getUserInGroupByIdAPI,group_id);
    yield put(getAddRemoveUserGroupList({userInGroupByID,userNotInGroupByID}));
}

function* removeGroup (payload){
    const {id} = payload;
    yield call(removeGroupByAPI,id);
    const userGroup = yield call(getUserGroupAPI);
    yield put(getUserGroupList(userGroup));
    yield put(showAlert(true));
}

function* searchUserToCreatGroup(payload){
    const {nameNeedToSearch : name} = payload;
    const userSearchedList = yield call(searchUserToCreatGroupAPI,name);
    yield put(getUserSearchedList(userSearchedList));
}

function* createGroup(payload){
    const {data: {users, tenNhom}} = payload;
    yield call(createGroupAPI,users,tenNhom);
    const userGroup = yield call(getUserGroupAPI);
    yield put(getUserGroupList(userGroup));
    yield put(showAddModal());
    yield put(showAlert(true));
    yield put(removeAllUserCreatedWithGroup());
}

function* changeGroupName(payload){
    // console.log("changeGroupName")
    const {data: {newGroupName, id}} = payload;
    // console.log(newGroupName, id)
    yield call(changeGroupNameByAPI,newGroupName,id);
    const userGroup = yield call(getUserGroupAPI);
    yield put(getUserGroupList(userGroup));
}


function* rootSaga() {
    yield takeEvery("GET_USER_GROUP", getUserGroup);
    yield takeEvery("EDIT_MODAL", getUserGroupByID);
    yield takeEvery("ADD_USER_TO_GROUP", addUserToGroup);
    yield takeEvery("REMOVE_USER_FROM_GROUP", removeUserFromGroup);
    yield takeEvery("REMOVE_GROUP", removeGroup);
    yield takeEvery("SEARCH_USER", searchUserToCreatGroup);
    yield takeEvery("CREATE_GOUP", createGroup);
    yield takeEvery("CHANGE_GROUP_NAME", changeGroupName);
}

export default rootSaga;