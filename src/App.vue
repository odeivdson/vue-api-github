<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Vue.js</a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>

    <br>
    <b-container fluid class="d-flex justify-content-center">
        <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html {
  margin: auto;
  max-width: 1280px;
}
body {
  background: #414259;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FAFAFA;
  /* margin-top: 60px; */
  
}

.container, .table {
    color: #FAFAFA;
}
</style>
