<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>

</template>

<script>
// import Main from '../components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: 100vh;
}
</style>
