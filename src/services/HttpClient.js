import ApiService from "./ApiService"



class HttpClient {
    async get(url) {
        return await ApiService.fetchData({
            method: 'get',
            url: url
        })
    }

    async post(url, data) {
        return await ApiService.fetchData({
            method: 'post',
            url: url,
            data,
        })
    }

    async patch(url, data) {
        return await ApiService.fetchData({
            method: 'patch',
            url: url,
            data,
        })
    }

    async put(url, data) {
        return await ApiService.fetchData({
            method: 'put',
            url: url,
            data,
        })
    }

    async delete(url) {
        return await ApiService.fetchData({
            method: 'delete',
            url: url
        })
    }
}

export default new HttpClient()