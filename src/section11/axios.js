import axios from 'axios';

// merupakan initialize file dari axios yang akan di gunakan pada file2 component
// file ini berguna untuk meng customize kegunaan functionalitas dari axios dari pada menggunakan axios yang biasa dan global

//untuk meng create axios constant
const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

//untuk menetapkan variabel default yang digunakan oleh axiosInstance
axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

//untuk men intercept sebelum request terjadi
axiosInstance.interceptors.request.use(
	(request) => {
		console.log(request);
		return request;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	}
);

//untuk men intercept sebelum response terjadi
axiosInstance.interceptors.response.use(
	(response) => {
		console.log(response);
		return response;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	}
);

export default axiosInstance;
