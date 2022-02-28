import axios from 'axios'

const service = axios.create({
    baseURL:'http://api.cpengx.cn/metashop/api',
    timeout:5000
})

//响应拦截器
service.interceptors.response.use((res)=>{
    if(res.status===200||res.status===201){
        return res.data
    }else{
        return Promise.reject(new Error(meta.msg))
    }
},(err)=>{
    return Promise.reject(new Error(err.msg.data))
})

export default service