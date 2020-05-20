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
  .basebuttonconfirm { font-size: 20px; padding: 10px 0;  color: #fff; flex: 1; text-align: center; background: blue; }
</style>
