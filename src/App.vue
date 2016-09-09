<template lang="html">
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    Index
  }
}
</script>

<style lang="sass">
@import '../static/index.scss'
</style>
