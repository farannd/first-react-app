import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://react-app-burger-farand.firebaseio.com/'
});

export default axiosInstance;
