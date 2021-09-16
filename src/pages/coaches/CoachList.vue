<template>
  <div>
    {{ activeStore }}
    <div
      v-for="store in activeStore"
      :key="store.stock"
    />
    {{ store.date }}
  </div>
</template>
<script>
export default ({
  data() {
    return {
      count: 1110,
      stores: [{
        store: 'test',
        date: '2021-09-01',
        stock: '145'
      }, {
        store: 'test',
        date: '2021-09-02',
        stock: '146'
      }, {
        store: 'test',
        date: '2021-09-03',
        stock: '147'
      }, {
        store: 'test',
        date: '2021-09-04',
        stock: '148'
      }],
      dates: ['2021-09-01', '2021-09-02', '2021-09-03', '2021-09-00']
    }
  },
  computed: {
    activeStore: function() {
      return this.stores.filter((store) => {
        console.log(store.date)
        console.log(this.dates.includes(store.date))
        console.log(this.dates)
        if (this.dates.includes(store.date)) {
          return store
        }
      })
    }
  }
})
</script>
