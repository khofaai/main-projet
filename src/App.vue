<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    TheHeader,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Glory:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300;1,500;1,800&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: 'Glory', sans-serif;
  font-weight: 500;
}
body {
  margin: 0;
}
</style>

