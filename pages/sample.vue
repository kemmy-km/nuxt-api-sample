<template>
  <v-row>
    <v-col class="text-center">
      <p>{{ dataOption }}</p>
      <p>{{ $store.state.SampleStore.message }}</p>
      <p>この下にstoreGetSamplesが入ります。</p>
      <p>
        {{ sampleObjectData }}
        <br>
        <!-- 下記、どっちも「山田太郎」で表示される -->
        {{ sampleObjectData.name }}
        <br>
        {{ sampleObjectDataName }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
import { request } from "../utils/request"
// import { mapState } from 'vuex'

export default {
  name: 'sample',
  data() {
    return {
      dataOption: 'componentのdataオプション',
    }
  },
  // ストアのmutationsなどを実行する
  mounted() {
    this.$store.dispatch('SampleStore/fetchSampleAction')
    console.log("sample.vueのmountedが動きました")
  },
  // ストアのgetterなどを実行する
  computed: {
    message() {
      console.log("computedのmessage")
      return this.$store.state.message
    },
    /** stateのsampleオブジェクトのgetterを実行 */
    sampleObjectData() {
      return this.$store.getters['SampleStore/getSamplesObject']
    },
    sampleObjectDataName() {
      return this.$store.getters['SampleStore/getSamplesObjectName']
    },
  }
}

</script>
