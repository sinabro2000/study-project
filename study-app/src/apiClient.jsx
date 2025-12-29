//axios 필수 임포트
import axios from "axios";


// Axios 커스텀 세팅

const apiClient = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
    },
});


export default apiClient;