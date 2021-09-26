<template>
  <Navbar brand="brand" />
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />

    <p>{{ count }}</p>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      count: 'zero',
    };
  },
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding-top: 0;
  overflow: hidden;
}
</style>
