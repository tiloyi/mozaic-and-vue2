<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="container">
      <m-accordion id="default" label="Accordion">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum
          alias corporis, odit, dolor non doloribus tenetur ullam distinctio
          ducimus ipsum corrupti, magni dolore. Alias voluptatibus excepturi
          assumenda nisi fugit.
        </p>
      </m-accordion>
      <m-button label="Ceci est un bouton"></m-button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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

.container {
  margin: 0 auto;
  max-width: 980px;
}
</style>
