<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table  v-if="!isLoading" :obtenerData="obtenerData" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable.vue'

export default {
  name: 'Home',
  components: {
    PxAssetsTable
  },
   data() {
    return {
      isLoading: false,
      obtenerData: []
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(datos => (this.obtenerData = datos))
      .finally(() => (this.isLoading = false))
  }
}
</script>
