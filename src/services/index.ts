import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";

let cancelTokenSource: CancelTokenSource | null = null;

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

// Thêm interceptor trước khi gửi request
instance.interceptors.request.use(
    (config) => {
        // Kiểm tra và thêm token vào header nếu có

        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Xử lý lỗi khi gửi request
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Thêm interceptor sau khi nhận phản hồi từ server
instance.interceptors.response.use(
    (response) => {
        // Xử lý phản hồi thành công
        return response;
    },
    (error) => {
        // Xử lý lỗi phản hồi từ server
        console.error('Response Error:', error.response);
        return Promise.reject(error);
    }
);

// Function để gọi API
export const callApi = async (params: AxiosRequestConfig) => {

    if (cancelTokenSource) {
        cancelTokenSource.cancel('Cancel previous request');
    }

    cancelTokenSource = axios.CancelToken.source();

    try {
        const response = await instance({
            ...params,
            cancelToken: cancelTokenSource.token,
        });

        return response.data;
    } catch (error) {
        // // Xử lý lỗi từ interceptor
        // console.error('Interceptor Error:', error);
        // throw new Error('Interceptor Error');

        if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
        } else {
            console.error('Interceptor Error:', error);
            throw new Error('Interceptor Error');
        }
    } finally {
        console.log('finally');
    }
};

export default callApi;