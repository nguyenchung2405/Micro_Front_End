import axios from "axios";

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjYwNTMzMDkwLCJleHAiOjc3MDg1MzMwOTAsIm5iZiI6MTY2MDUzMzA5MCwianRpIjoiYWhrb3ZvdE0wZlhlRGlTdyIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.UjXSDINPnYWZLITsY8R4GIW2fsQ5WiPWw73c3L0e1cM";

export async function getUserGroupAPI(){
    try {
        const res = await axios({
            url: "http://192.168.61.116/api/v1/user-group",
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            } 
        });
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function getUserNotInGroupByIdAPI(id){
    try {
        const res = await axios({
            url: `http://192.168.61.116/api/v1/user-group/${id}?is_except=true&page=1&per_page=442`,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            } 
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getUserInGroupByIdAPI(id){
    try {
        const res = await axios({
            url: `http://192.168.61.116/api/v1/user-group/${id}?page=1&per_page=442`,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            } 
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function addUserToGroupByAPI(user_id,group_id){
    try {
        const res = await axios({
            url: `http://192.168.61.116/api/v1/user-group/${group_id}/user`,
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            },
            data: {
                "user_ids": [ `${user_id}` ]  
            }
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function removeUserFromGroupByAPI(user_id,group_id){
    try {
        const res = await axios({
            url: `http://192.168.61.116/api/v1/user-group/${group_id}/user`,
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            },
            data: {
                "user_ids": [ `${user_id}` ]  
            }
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function removeGroupByAPI(id){
    try {
        const res = await axios({
            url: `http://192.168.61.116/api/v1/user-group/${id}`,
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            },
            data: {
                name: `Group ${id}`,
                description: `Nhóm ${id}` 
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function searchUserToCreatGroupAPI(name){
    try {
        const res = await axios({
            url: `http://192.168.61.116/api/user?full_name=${name}`,
            method: "GET"
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createGroupAPI(users,tenNhom){
    try {
        const res1 = await axios({
            url: `http://192.168.61.116/api/v1/user-group`,
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            },
            data: {
                name: `${tenNhom}`,
                description: `${tenNhom}`
            }
        });
        const {id : group_id} = res1.data.data;
        const res2 = await axios({
            url: `http://192.168.61.116/api/v1/user-group/${group_id}/user`,
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            },
            data: {
                "user_ids": [ ...users ]  
            }
        });
        return res2.data;
    } catch (error) {
        console.log(error);
    }
}

export async function changeGroupNameByAPI(name,group_id){
    try {
        const res = await axios({
            url: `http://192.168.61.116/api/v1/user-group/${group_id}`,
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            },
            data: {
                name: `${name}`,
                description: `${name}`
            }
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}