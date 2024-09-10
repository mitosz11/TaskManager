import axios from 'axios';
import {API_URL} from "../constants/config.js";

export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, updatedTask) => axios.put(`${API_URL}/tasks/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);