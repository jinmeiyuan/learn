<template>
  <div>

  </div>
</template>
<script>
import {test} from '@/server/getData.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.mockData()
  },
  methods: {
    mockData () {
      test().then(r => {
        console.log(r)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
