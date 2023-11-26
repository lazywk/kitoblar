const { default: ApiService } = require("./ApiService");



export async function apiLogin(data) {
    return await ApiService.fetchData({
        method: 'post',
        url: 'login',
        data: data
    })
}

export async function apiRegister() {
    return await ApiService.fetchData({
        method: 'post',
        url: 'register',
        data: data
    })
}