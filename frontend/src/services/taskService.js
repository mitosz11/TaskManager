import axios from "axios";
import { API_URL } from "../constants/config.js";

export const getTasks = (token) =>
  axios.get(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createTask = (task, token) =>
  axios.post(`${API_URL}/tasks`, task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updateTask = (id, updatedTask, token) =>
  axios.put(`${API_URL}/tasks/${id}`, updatedTask, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteTask = (id, token) =>
  axios.delete(`${API_URL}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

