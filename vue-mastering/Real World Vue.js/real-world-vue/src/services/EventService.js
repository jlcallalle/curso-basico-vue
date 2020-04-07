import axios from 'axios'

const apiClient = axios.create({  // created, a single axios instance for our entire app
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json', // for authentication & configuration
    'Content-Type': 'application/json'
  }
})

export default {
    getEvents() {
      return apiClient.get('/events')
    },
    getEvent(id) {
      return apiClient.get('/events/' + id)
    }
  }
  