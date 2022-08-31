import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    editGroup: {},
    removeUserList:[],
    addUserList:[],
    userSearchedList: [],
    userCreatedWithGroup:[],
    showCreateModal: false,
    showEditModal: false,
    showAlert: false,
}

const groupListSlice = createSlice({
    name: "groupList",
    initialState,
    reducers: {
        showAddModal: (state) => {
            state.showCreateModal = !state.showCreateModal;
        },
        showEditModal: (state, action) => {
            if (action.payload) {
                state.editGroup = { ...state.list.find(group => group.id === action.payload) };
            }
            state.showEditModal = !state.showEditModal;
        },
        showAlert:(state,action)=>{
            state.showAlert = action.payload;
        },
        getUserGroupList: (state,action)=>{
            const {data} = action.payload;
            state.list = data;
        },
        getAddRemoveUserGroupList: (state,action)=>{
           state.addUserList = action.payload.userNotInGroupByID.data;
           state.removeUserList = action.payload.userInGroupByID.data;
        },
        getUserSearchedList: (state,action)=>{
            state.userSearchedList = action.payload.data;
        },
        setUserSearchedList: (state)=>{
            state.userSearchedList = [];
        },
        addRemoveUserCreatedWithGroup: (state,action)=>{
            let index = state.userCreatedWithGroup.findIndex(id => id === action.payload);
            if(index !== -1){
                state.userCreatedWithGroup.splice(index,1);
                console.log([...state.userCreatedWithGroup])
            } else {
                state.userCreatedWithGroup.push(action.payload);
                console.log([...state.userCreatedWithGroup])
            }
        },
        removeAllUserCreatedWithGroup: (state)=>{
            state.userCreatedWithGroup = [];
        }
    }
})

export const { showAddModal, showEditModal, getUserGroupList, getAddRemoveUserGroupList , 
    getUserSearchedList, setUserSearchedList, addRemoveUserCreatedWithGroup,
    removeAllUserCreatedWithGroup, showAlert } = groupListSlice.actions;
export default groupListSlice.reducer;