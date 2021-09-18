<template>
  <h1>blue list</h1>
</template>
<script>
import { getCurrentInstance } from 'vue';
// import { $services } from '@/modules' // 'src/modules/index.js

export default {
  inject: ['$services'],
  setup(props, context) {
    // const { appContext } = getCurrentInstance();
    console.log(getCurrentInstance())
  }
}
</script>
