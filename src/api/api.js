import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7fb940b8-ed29-47ee-a5b1-6eee3fd8462f"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count${pageSize}`)
            .then(response => response.data);
    }
}
// сделай это
export const followAPI = {
    follow(currentPage = 1, pageSize = 10) {
        return instance.get(`follow?page=${currentPage}&count${pageSize}`)
            .then(response => response.data);
    }
}