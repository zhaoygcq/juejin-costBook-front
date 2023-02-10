import axios from 'axios'
import { Toast } from 'zarm'

const request = axios.create({
    baseURL: "/api",
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `${localStorage.getItem('token') || null}`,
        post: {
            'Content-Type': 'application/json'
        }
    }
})

request.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        Toast.show('服务端异常！')
        return Promise.reject(res)
    }
    if (res.data.code != 200) {
        if (res.data.msg) Toast.show(res.data.msg)
        if (res.data.code == 401) {
            window.location.href = '/login'
        }
        return Promise.reject(res.data)
    }

    return res.data
})

export const get = request.get;
export const post = request.post;