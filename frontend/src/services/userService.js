import axios from "axios";
import { API_URL } from "../constants/config.js";

export async function getUser(id, token) {
  try {
    const response = await axios.get(`${API_URL}/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user:",
      error.response?.data || error.message
    ); 
    throw error;
  }
}

export async function deleteUser(id, token) {
  try {
    const response = await axios.delete(`${API_URL}/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting user:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function getAllUser(token, queryParams = {}) {
  try {
    const response = await axios.get(`${API_URL}/api/user`, {
      params: queryParams,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function updateUser(updateData, id, token) {
  try {
    const response = await axios.patch(
      `${API_URL}/api/user/${id}`,
      updateData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error updating user:",
      error.response?.data || error.message
    );
    throw error;
  }
}
