<template>
  <section class="container">
    <div>
      <!-- <p>{{ $store.state.message }}</p> -->
      <p>{{ $store.state.hello.message }}</p>

      <!-- <button @click="$store.commit('updateMessage')">Update</button> -->
      <!-- <button @click="$store.commit('updateMessage', 'Commit with payload')">Update</button> -->
      <!-- <button @click="$store.dispatch('updateMessageAction')">Dispatch</button> -->
      <!-- <button @click="$store.dispatch('updateMessageAction', 'dispatch with payload')">Dispatch</button> -->
      <button @click="$store.dispatch('hello/updateMessageAction', 'dispatch with payload')">Dispatch</button>

   </div>
  </section>
</template>

<script>
// import { request } from "../utils/request"
// import { mapState } from 'vuex'
// import { createStore } from '../store/index'

export default {
}

</script>
