// import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators"
// import { appStore } from "."
// import { getProperties, postProperty } from "~/apis/sample"
// import { PropertyRequest, PropertyResponse } from "~/types/api"

// @Module({
//   name: "SampleStore",
//   stateFactory: true,
//   namespaced: true,
// })
// export default class SampleStore extends VuexModule {
//   /**
//    * state
//    * コンポーネントでそのまま参照して良い値 public
//    * getters経由で表示したい場合 private
//    */

//   private rawProperties {
//     return this.rawProperties?.map((p) => {
//       return {
//         code: p.code,
//         name: p.name,
//         address: p.address,
//         personnelCode: p.personnelCode,
//         createDateTime: p.createdDateTime.replace(/-/g, "/"),
//         updateDateTime: p.updatedDateTime,
//       }
//     })
//   }

//   /**
//    * getters
//    */
//   public get properties() {
//     return this.rawProperties?.map((p) => {
//       return {
//         code: p.code,
//         name: p.name,
//         address: p.address,
//         personnelCode: p.personnelCode,
//         createDateime: p.createDateTime.replace(/-/g, "/"),
//         updateDateTime: p.updateDateTime,
//       }
//     })
//   }

//   /**
//    * Mutation
//    * actions経由（非同期処理）での更新しかしない場合はprivateで宣言
//    * 引数を１つしか持てない
//    */

//   @Mutation
//   setProperties(data) {
//     this.rawProperties = data
//   }

//   /**
//    * Action
//    * 引数を１つしか持てない
//    */
//   @Action({ rawError: true })
//   public async fetchProperties() {
//     const results = await getProperties()
//     if (!results) return
//     this.setProperties(results)
//   }

//   @Action({ rawError: true })
//   public async createContract(data) {
//     const results = await postProperty(data)
//     if (!results) return false
//     appStore.pushToaster({ title: "成功", text: "登録に成功しました。", type: "success" })
//     this.fetchProperties()
//     return true
//   }
// }
