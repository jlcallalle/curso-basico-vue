<template>
  <div id="app">
    <PxHeader />
    <PxAssetsTable />
  </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import PxAssetsTable from '@/components/PxAssetsTable.vue'


export default {
  name: 'App',
  components: {
    PxHeader, PxAssetsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
