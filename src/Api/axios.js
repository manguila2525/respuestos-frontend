import axios from 'axios'

export const getApiSpare = async (set) => {
  const { data } = await axios.get('http://localhost:8000/api/spare')
  set(data.data)
}
