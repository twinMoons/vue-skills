<template>
  <div class="index">
    <p class="hello">index<span>page</span></p>
    <p>
      <base-button-confirm>确认</base-button-confirm>
    </p>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>
<style lang="scss" scoped>
.hello { color: pink;
  span { color: red; margin-left: 20px;}
}
</style>
