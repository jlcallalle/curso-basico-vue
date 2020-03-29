<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span> Ranking </span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
       <tr
        v-for="a in obtenerData"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
           <img
            class="w-6 h-6"
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td>
           <b>#{{ a.rank }}</b>
        </td>
        <td>
           <b>#{{ a.name }}</b>
        </td>
        <td>
           <b>#{{ a.priceUsd }}</b>
        </td>
        <td>
           <b>#{{ a.marketCapUsd }}</b>
        </td>
        <td><b>#{{ a.changePercent24Hr }}</b></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PxAssetsTable',

  props: {
    // se neecsita una propiedad 'assets' que le permite al componente pardre enviar la lista de assets
    obtenerData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
