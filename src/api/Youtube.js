import axios from "axios";

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error.response.data.msg || '時間をおいてお試しください。');
});

const youtubeApi = {
    async get(urlId) {
        const result = await axios.get("/download", {
            params: {
                urlId
            }
        })
        return result.data
    }
}

export default youtubeApi;