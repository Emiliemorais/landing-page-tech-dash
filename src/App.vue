<template>
  <div id="app">
    <landing-page />
  </div>
</template>

<script>
import LandingPage from './screens/LandingPage';

export default {
  name: 'App',
  components: {
    LandingPage,
  },
};
</script>

<style lang="scss">
  @import 'assets/scss/main';
</style>
