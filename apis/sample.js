// // import { PropertyRequest, PropertyResponse } from "~/types/api"
// import { request } from "~/utils/request"

// /**
//  * apisディレクトリはAPIを叩くだけの場所
//  * 必要なデータをstoreに渡すよう定義
//  */

// /** 一覧取得 */
// export const getSamples = async (data) => {
//   console.log("aaa")
//   // const results = await request.get("http://127.0.0.1:8000/api/sample", { params: data })
//   // const results = await request.get("http://127.0.0.1:8000/api/sample")
//   // const results = await request.get("http://127.0.0.1:8000/api/ping")
//   if (!results || !results.data) return
//   return results.data
// }

// /** 登録 */
// export const postSamples = async (data) => {
//   const results = await request.post("/post/samples", data)
//   if (!results) return false
//   return results.status === 200
// }
