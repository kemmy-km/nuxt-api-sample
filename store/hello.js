export const state = () => ({
  message: 'Hello Vuex!'
})

export const mutations = {
  updateMessage: function(state, payload) {
    state.messge = payload
  }
}

export const actions = {
  updateMessageAction(context, payload) {
    context.commit('updateMessage', payload)
  }
}
