<template>
  <div id="app">
    <p class="hello">hello world<span>one world</span></p>
    <base-button-confirm>确认</base-button-confirm>
    <base-button-cancle>取消</base-button-cancle>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style  lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello { color: pink;
  span { color: red; margin-left: 20px;}
}
</style>
