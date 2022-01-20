import * as axios from "axios"

const instance = axios.create ({
    withCredentials : true
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`http://localhost:3004/users?_page=${currentPage}&_limit=${pageSize}`).then(response => response.data);
    } ,

    //TODO FOLLOW/UNFOLLOW
    follow(currentPage = 1, pageSize = 10) {

        return instance.get(`http://localhost:3004/users?_page=${currentPage}&_limit=${pageSize}`).then(response => response.data);
    } 
    
}


