
import axios from 'axios'


const API = 'http://localhost:4000'

const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`,product)
const deleteproduct = (id) => axios.delete(`${API}/products/delete/${id}`)

const getOrders = () => axios.get(`${API}/orders/all`)
const getUsers = () => axios.get(`${API}/users/all`)


const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/Register`, credentials)
//const Product = (data) => axios.post(`${API}/products/add`, data)
export { getProducts,getOrders, getUsers,Login,addProduct,Register,deleteproduct }
