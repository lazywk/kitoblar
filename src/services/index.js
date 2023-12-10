import axios from "axios"
import appConfig from "configs/appConfig"
import store from "store"
import { setSignOutSuccess } from "store/auth/sessionSlice"

const unAuthenticatedCode = ["403"]

const api = axios.create({
    timeout: 10000,
    baseURL: appConfig.apiPrefix
})

api.interceptors.request.use(
    (config) => {
        const stateData = store.getState()

        if (stateData.session.token !== "") {
            config.headers["Authorization"] = `${appConfig.tokenType} ${stateData.session.token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)


api.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error

        if (unAuthenticatedCode.includes(response.status)) {
            return store.dispatch(setSignOutSuccess())
        }

        return Promise.reject(error)
    }
)


export default api
