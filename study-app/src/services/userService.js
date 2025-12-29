import apiClient from "../apiClient";


//예시 사용자 정보 가져오기 함수
export const getUser = () => apiClient.get("/users");

//예시 로그인 함수
export const login = (data) => apiClient.post("/login", data);