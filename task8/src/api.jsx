import axios from "axios"

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})

api.interceptors.request.use(
    (config) => {
        console.log("Request sent", config.url)
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) =>{
        console.log("Response Recieved")
        return response
    },
    (error) => Promise.reject(error)
)

export default api