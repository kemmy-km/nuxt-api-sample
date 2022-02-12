// import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators"
// import { appStore } from "."
// import { getSamples, postSample } from "~/apis/sample"
// import { SampleRequest, SampleResponse } from "~/types/api"

const state = {
  // 'state' should be a method that returns an object in store/SampleStore.js
  /** actionsでAPI通信したデータを代入する先のオブジェクト */
  sample: '',
}

const getters = {
  // stateの値をgetterとしてreturnする
  getSamplesObject: (state) => {
    return state.sample
  },
  getSamplesObjectName: (state) => {
    return state.sample.name
  },
}

const actions = {

  /**
   * コンポーネントのmountedで`this.$store.dispatch('SampleStore/fetchSampleAction')`でこのactionsのメソッドが呼び出される。
   */
  async fetchSampleAction (context) {
    console.log("storeのfetchSampleActionが動いています")
    console.log("axiosの非同期通信で特定のエンドポイントからgetした結果をresultsという定数に代入します。")
    const results = await this.$axios.get("http://127.0.0.1:8000/api/sample")
    if (!results) return

    /** axiosでapi通信しデータを取得した後、commit()メソッドで第二引数に取得したデータを指定し、mutationsのメソッドを実行する。 */
    context.commit('setSamples', results.data)
  },
}

const mutations = {
  /** actionsでapi通信しGETしたデータを第2引数に指定。そのデータをstateのsampleオブジェクトに代入する */
  setSamples(state, data) {
    state.sample = data
    console.log("storeのmutationのsetSamplesメソッドが動き、stateのsampleオブジェクトにdataが代入されました。")
    console.log(state.sample) // sampleオブジェクトに代入されたapiのデータを表示
    console.log(`名前：「${state.sample.name}」が取得できましたね。`)
    console.log(`性別：「${state.sample.gender}」が取得できましたね。`)
    console.log(`メールアドレス：「${state.sample.mail}」が取得できましたね。`)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

// @Module({
//   name: "SampleStore",
//   stateFactory: true,
//   namespaced: true,
// })

// export default class SampleStore extends VuexModule {
  /**
   * state
   * コンポーネントでそのまま参照して良い値 public
   * getters経由で表示したい場合 private
   */

  // private rawProperties {
  //   return this.rawProperties?.map((p) => {
  //     return {
  //       code: p.code,
  //       name: p.name,
  //       address: p.address,
  //       personnelCode: p.personnelCode,
  //       createDateTime: p.createdDateTime.replace(/-/g, "/"),
  //       updateDateTime: p.updatedDateTime,
  //     }
  //   })
  // }

  /**
   * getters
   */
  // public get properties() {
  //   return this.rawProperties?.map((p) => {
  //     return {
  //       code: p.code,
  //       name: p.name,
  //       address: p.address,
  //       personnelCode: p.personnelCode,
  //       createDateime: p.createDateTime.replace(/-/g, "/"),
  //       updateDateTime: p.updateDateTime,
  //     }
  //   })
  // }

  /**
   * Mutation
   * actions経由（非同期処理）での更新しかしない場合はprivateで宣言
   * 引数を１つしか持てない
   */

  // @Mutation
  // setProperties(data) {
  //   this.rawProperties = data
  // }

  /**
   * Action
   * 引数を１つしか持てない
   */
  // @Action({ rawError: true })
  // public async fetchProperties() {
  //   const results = await getProperties()
  //   if (!results) return
  //   this.setProperties(results)
  // }

  // @Action({ rawError: true })
  // public async createContract(data) {
  //   const results = await postProperty(data)
  //   if (!results) return false
  //   appStore.pushToaster({ title: "成功", text: "登録に成功しました。", type: "success" })
  //   this.fetchProperties()
  //   return true
  // }

// }
