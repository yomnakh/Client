import axios from "axios";

const Api = axios.create({
    baseURL: "https://edutrax.vercel.app",
    headers: {
        "Content-Type": "application/json",
    }
});

Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.token = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const uploadProfilePicture = async (formData, token) => {
    try {
        const response = await Api.post('/profile/profile-photo-upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`, // Include the token for authentication if needed
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export default Api;

// Api.interceptors.response.use(
//     (response) => {
//         localStorage.setItem("responseData", JSON.stringify(response));
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default Api;



// Api.interceptors.request.use(
//     config => {
//         const token = JSON.parse(localStorage.getItem("access_token"))
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     error => Promise.reject(error)
// );
// Api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("access_token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// import axios from "axios";

// const Api = axios.create({
//     baseURL: "https://edutrax.vercel.app",
//     headers: {
//         "Content-Type": "application/json",
//     }
// });

// Api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("access_token");
//         if (token) {
//             config.headers.Authorization = token;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// Api.interceptors.response.use(
//     (response) => {
//         // Save entire response data to local storage
//         localStorage.setItem("responseData", JSON.stringify(response.data));
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


// export default Api;