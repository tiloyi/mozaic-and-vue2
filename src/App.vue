<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MButton label="Ceci est un label - 2" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { MButton } from "@mozaic-ds/vue/src";

export default {
  name: "App",
  components: {
    HelloWorld,
    MButton,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
