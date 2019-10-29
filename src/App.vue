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

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FAFAFA;
  /* margin-top: 60px; */
}

body {
  /*min-height: 100%; */
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
}

.container, .table {
    color: #FAFAFA;
}
</style>
