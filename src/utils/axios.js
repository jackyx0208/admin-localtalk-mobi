import axios from 'axios';

// ----------------------------------------------------------------------

// const URL =
//   process.env.NODE_ENV !== 'production'
//     ? 'http://localhost:4000/api/v1'
//     : 'https://locals-admin-panel-api-lhxhi.ondigitalocean.app/local-admin-backend-api/api/v1';

// const URL = 'http://ves.qtp.mybluehost.me:4000/api/v1';
const URL = 'http://10.10.11.143:4000/api/v1';


const axiosInstance = axios.create({
  baseURL: URL
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;