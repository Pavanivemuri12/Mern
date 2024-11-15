
import axios from 'axios'


const API = 'http://localhost:4000'
//products
const getProducts = () => axios.get(`${API}/products/all`)
const getProductsCount = () => axios.get(`${API}/products/count`)
const addProduct = (product) => axios.post(`${API}/products/add`,product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteproduct = (id) => axios.delete(`${API}/products/delete/${id}`)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)

const getOrders = () => axios.get(`${API}/orders/all`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)
const addOrders= (order) => axios.post(`${API}/orders/add`,order)
const editOrder = (order, id) => axios.put(`${API}/Orders/edit/${id}`, order)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)
//users
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) => axios.post(`${API}/users/add`,user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)


const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const resetPassword = (password, id) => axios.put(`${API}/users/resetpassword/${id}`, password)
const Register = (credentials) => axios.post(`${API}/auth/Register`, credentials)
//const Product = (data) => axios.post(`${API}/products/add`, data)
export { getProducts,getOrders, getUsers,Login,resetPassword,addProduct,Register,deleteproduct,addUser ,deleteUser,addOrders,deleteOrder,editProduct,editOrder,editUser,getProductsCount,getOrdersCount,getUsersCount}
