import { NuxtAxiosInstance } from "@nuxtjs/axios"

let $axios

export const initializeAxios = (axiosInstance) => {
  $axios = axiosInstance
}
// export const initializeAxios = (NuxtAxiosInstance) => {
//   $axios = NuxtAxiosInstance
// }

export { $axios }

export const setCurrentCompanyIdHeader = (currentCompanyId) => {
  $axios.setHeader("x-company-id", currentCompanyId)
}

// export const setUserIdHeader = (userId) => {
//   $axios.setHeader("x-login-user-id", userId)
// }
