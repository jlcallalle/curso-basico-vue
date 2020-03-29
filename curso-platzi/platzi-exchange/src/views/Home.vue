<template>
  <div>
    <px-assets-table :obtenerData="obtenerData" />
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
      obtenerData: []
    }
  },
  created() {
    api
      .getAssets()
      .then(datos => (this.obtenerData = datos))
  }
}
</script>
