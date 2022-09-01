import axios from 'axios'

const instance = axios.create({
	baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
})

instance.defaults.headers.common['Authorization'] = 'Auth from instances'

export default instance
