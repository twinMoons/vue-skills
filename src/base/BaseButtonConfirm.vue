<template>
  <div class="basebuttonconfirm">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseButtonConfirm'
}
</script>
<style scoped>
  .basebuttonconfirm { font-size: 42px; font-weight: bold; color: #fff; flex: 1; text-align: center; background: blue; }
</style>
