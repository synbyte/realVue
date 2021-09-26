<template>
  <div class="header">
    <h1>BRAND</h1>
    <h2>{{ time() }}</h2>
  </div>
</template>

<script>
export default {
  date() {
    return {
      time: Date(),
    };
  },
  methods: {
    time() {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      const local = hour + ':' + min;
      return local;
    },
  },
  name: 'Navbar',
  props: {
    brand: String,
  },
};
</script>

<style>
h2 {
  justify-content: right;
  align-items: center;
  text-align: right;
  height: 100%;
  margin-right: 10px;
}
h1 {
  justify-content: left;
  align-items: center;
  text-align: left;
  height: 100%;
  margin-right: 50%;
}
.header {
  display: flex;
  margin: 0 auto;
  justify-content: center;

  background: teal;
  box-shadow: 0 0 15px black;
}
</style>
