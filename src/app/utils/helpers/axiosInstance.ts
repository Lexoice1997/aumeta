import axios from "axios"

import { rootPaths } from "../constants/rootPaths.ts"

export const $api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})

$api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config

    // If the error is a 401 and we have a refresh token, refresh the JWT token
    if (error.response.status === 401) {
      $api
        .get("auth/refresh")
        .then(() => {
          // Re-run the original request that was intercepted
          $api(originalRequest)
            .then((response) => {
              return response.data
            })
            .catch((error) => {
              console.log(error)
            })
          // return api(originalRequest)
        })
        .catch((err) => {
          // If there is an error refreshing the token, log out the user
          console.log(err)
          localStorage.clear()
          if (window.location.pathname !== rootPaths.AUTH.INDEX) {
            window.location.href = window.location.origin
          }
        })
    }

    // Return the original error if we can't handle it
    return Promise.reject(error)
  }
)
