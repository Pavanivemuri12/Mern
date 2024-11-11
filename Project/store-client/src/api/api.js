
import axios from 'axios'


const API = 'http://localhost:4000'

const getProducts = () => axios.get(`${API}/products/all`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getUsers = () => axios.get(`${API}/users/all`)

const Login = (data) => axios.post(`${API}/auth/login`, data)
export { getProducts,getOrders, getUsers,Login }
