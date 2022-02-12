



// import { Store } from 'vuex'
// import { getModule } from "vuex-module-decorators"
// import AppStore from "~/store/AppStore"
// import AuthStore from "~/store/AuthStore"
// import ContractStore from "~/store/ContractStore"
// import MemorandumStore from "~/store/MemorandumStore"
// import NegotiationStore from "~/store/NegotiationStore"
// import NegotiationHistoryTemplateStore from "~/store/NegotiationHistoryTemplateStore"
// import AttachmentStore from "~/store/AttachmentStore"
// import NoticeStore from "~/store/NoticeStore"
// import PropertyStore from "~/store/PropertyStore"
// import SampleStore from "~/store/SampleStore"

/**
 * store moduleを定義したら追加する
 * TODO 本当はconstにしたい
 *
 */

// export let appStore
// export let authStore
// export let contractStore
// export let memorandumStore: MemorandumStore
// export let attatchmentStore: AttachmentStore
// export let negotiationStore: NegotiationStore
// export let negotiationHistoryTemplateStore: NegotiationHistoryTemplateStore
// export let noticeStore: NoticeStore
// export let propertyStore: PropertyStore
// export let sampleStore

// export function initializeStores(store) {
//   appStore = getModule(AppStore, store)
//   authStore = getModule(AuthStore, store)
//   contractStore = getModule(ContractStore, store)
//   memorandumStore = getModule(MemorandumStore, store)
//   attatchmentStore = getModule(AttachmentStore, store)
//   negotiationStore = getModule(NegotiationStore, store)
//   negotiationHistoryTemplateStore = getModule(NegotiationHistoryTemplateStore, store)
//   noticeStore = getModule(NoticeStore, store)
//   propertyStore = getModule(PropertyStore, store)
//   sampleStore = getModule(SampleStore, store)
// }


// Udemy

// import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     state: function() {
//       return {
//         message: 'Hello Vuex!'
//       }
//     },
//     mutations: {
//       // updateMessage: function(state) {
//       //   state.mesasge = 'Updated!'
//       // }
//       updateMessage: function(state, payload) {
//         state.mesasge = payload
//       }
//     },
//     actions: {
//       // updateMessageAction(context) {
//       //   context.commit('updateMessage', 'Commit with payload')
//       // }
//       updateMessageAction(context, payload) {
//         context.commit('updateMessage', payload)
//       }
//     }
//   })
// }

// export default createStore
