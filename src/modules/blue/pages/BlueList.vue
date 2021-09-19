<template>
  <h1>blue list</h1>
</template>
<script>
import { useServices } from '@/services';

export default {
  setup() {
    const $services = useServices();
    console.log({ $services })
  }
}
</script>
