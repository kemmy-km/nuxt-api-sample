import { AxiosResponse } from "axios"
// import { $axios } from "~/utils/api"
// import { appStore } from "~/store"
// import { PLATFORM_FRONT_BASE_URL } from "~/constants/config"
// import { removeTokenFromLocalStorage } from "~/plugins/keycloak"

const UNAUTHORIZED = 401
const FORBIDDEN = 403

// Todo型
// const commonErrorHandling = (error, title, message) => {
//   if(!error || !error.response) {
//     appStore.pushToaster({
//       title: "サーバーエラー",
//       text: "しばらく待ってから、もう一度お試し下さい",
//       type: "error",
//     })
//     return
//   }

//   switch (error.response.status) {
//     case UNAUTHORIZED:
//       appStore.pushToaster({ title: "", text: "", type: "error"})
//     case FORBIDDEN:
//       appStore.pushToaster({ title: "", text: "", type: "error" })
//       return
//     default:
//       appStore.pushToaster({ title, text: message, type: "error"})
//       // return
//   }
// }

// const commonGetErrorHandling = (error: any, title: string, message: string):void => {
//   if(!!error && !!error.response) {
//     if(error.response.status == FORBIDDEN) {
//       redirectToUnauthorizedPage()
//       return
//     }
//   }
//   commonErrorHandling(error, title, message)
// }

// const redirectToUnauthorizedPage = (): void => {
//   removeTokenFormLocalStorage()
//   window.location.href = `${PLATFORM_FRONT_BASE_URL}/unauthorized`
// }

export const request = {

  get: (url, data) => {
    return $axios.get(url, data).catch((error) => {
      // if(!$axios.is Cancel(error)) {
      //   commonGetErrorHandling(error, "エラー", "データが取得できません")
      // }
      console.log("request")
    })
  },

  post: (url, data) => {
    return $axios.post(url, data).catch((error) => {
      commonErrorHandling(error, "エラー", "データの取得ができません")
    })
  },

  put: (url, data) => {
    return $axios.put(url, data).catch((error) => {
      commonErrorHandling(error, "エラー", "データの更新に失敗しました")
    })
  },

  delete: (url, data) => {
    return $axios.delete(url, data).catch((error) => {
      commonErrorHandling(error, "エラー", "")
    })
  },
}
